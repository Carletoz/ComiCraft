import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { MembershipService } from './membership.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateMembershipDto, UpdateMembershipDto } from './membership.dto';
import { PasswordInterceptor } from 'src/interceptors/password.interceptor';

@ApiTags('membership')
@Controller('membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post()
  @HttpCode(201)
  addMembership(@Body() createMembership: CreateMembershipDto) {
    console.log('membershipController=', createMembership);
    return this.membershipService.addMembership(createMembership);
  }

  @Get()
  @HttpCode(200)
  @UseInterceptors(ClassSerializerInterceptor, PasswordInterceptor)
  getMerberships() {
    return this.membershipService.getMerberships();
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor, PasswordInterceptor)
  getMembreshipById(@Param('id', ParseUUIDPipe) id: string) {
    return this.membershipService.getMembershipById(id);
  }

  @Delete(':id')
  removeMembership(@Param('id', ParseUUIDPipe) id: string) {
    console.log('controller borrar membresia', id);
    return this.membershipService.removeMembership(id);
  }

  @Put(':id')
  updateMembership(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateMembershipDto: UpdateMembershipDto,
  ) {
    return this.membershipService.updateMembership(id, updateMembershipDto);
  }

  @Put('deleted/:id')
  deleteMembership(@Param('id', ParseUUIDPipe) id: string) {
    return this.membershipService.deleteMembership(id);
  }

  @Post('/prueba')
  Membership(@Body() data) {
    try {
      console.log('membershipController=', data);
      return data;
    } catch (error) {
      console.error;
    }
  }
}
