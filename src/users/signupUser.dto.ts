import { IsEmail, Matches, IsString } from 'class-validator';

export class signupUserDto {
  @IsEmail()
  email: string;

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,
  )
  password: string;

  @IsString()
  name: string;
}
