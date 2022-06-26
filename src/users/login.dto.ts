import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { REGAX_PASSWORD } from 'src/common/constant';
export class loginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(REGAX_PASSWORD)
  password: string;
}
