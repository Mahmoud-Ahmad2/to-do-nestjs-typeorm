import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { signupUserDto } from './signupUser.dto';
import { loginDto } from './login.dto';
import * as bcrypt from 'bcrypt';
import { createToken } from 'src/utils';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async insert(@Body() dto: signupUserDto): Promise<object> {
    const email = await this.userService.findOne(dto.email);

    if (email) {
      throw new HttpException('Email already exists', 400);
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const data = await this.userService.insert(
      dto.email,
      hashedPassword,
      dto.name,
    );
    return {
      message: 'User created successfully',
      data,
    };
  }

  @Post('login')
  async login(@Body() dto: loginDto): Promise<object> {
    const user = await this.userService.findOne(dto.email);

    if (!user) {
      throw new HttpException('User not found', 400);
    }

    const checkPassword = await bcrypt.compare(dto.password, user.password);

    if (!checkPassword) {
      throw new HttpException('Password is incorrect', 400);
    }
    const token = await createToken(user._id);

    return {
      data: {
        email: user.email,
        name: user.name,
      },
      token,
    };
  }
}
