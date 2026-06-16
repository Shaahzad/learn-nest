import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enum';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.User)
    getAdmin(){
        return {message: 'only admin can access'}
    }
}
