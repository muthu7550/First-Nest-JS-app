import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() createUserDto: any): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  async updateFull(@Param('id') id: string, @Body() updateDto: any): Promise<User> {
    return this.usersService.updateFull(id, updateDto);
  }

  @Patch(':id')
  async updatePartial(@Param('id') id: string, @Body() updateDto: any): Promise<User> {
    return this.usersService.updatePartial(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ deleted: boolean }> {
    return this.usersService.remove(id);
  }
}