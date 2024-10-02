import { UserRepository } from '@/domain/repositories/user/UserRepository';
import { IAuthRepository } from './IAuthRepository';
import { CreateUserDTO } from '@/domain/dto/User.dto';
import { SignInWithEmailAndPAsswordDTO } from '@/domain/dto/Auth.dto';
import { HttpException } from '@/domain/models/HttpException';
import { compare } from 'bcrypt'

export class AuthRepository implements IAuthRepository {
  constructor (
    private userRepository: UserRepository
  ) {}

  async signUpWithEmailAndPassword (payload: CreateUserDTO) {
    await this.userRepository.create(payload)
  }

  async signInWithEmailAndPassword (payload: SignInWithEmailAndPAsswordDTO) {
    const user = await this.userRepository.findByEmail(payload.email)

    if (!user) throw new HttpException(404, 'USER_NOT_FOUND')

    const isPasswordMatched = await compare(payload.password, user.password)

    if (!isPasswordMatched) throw new HttpException(401, 'INCORRECT_EMAIL_OR_PASSWORD')
  }
}