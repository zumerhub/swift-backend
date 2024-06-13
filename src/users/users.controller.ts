import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
findAll(): Promise<User[]> {
    return this.usersService.findAll();
}

@Get(':id')
findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
}

@Post()
create(@Body() user: User): Promise<User> {
    return this.usersService.create(user)
}

@Put(':id')
update(@Param('id') id: string, @Body() user: Partial<User>): Promise<User> {
    return this.usersService.update(+id, user)
}

@Delete(':id')
remove(@Param('id')  id: string): Promise<void> {
    return this.usersService.remove(+id)
}
}
