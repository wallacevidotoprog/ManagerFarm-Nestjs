import { Controller } from '@nestjs/common';
import { BaseController } from 'src/Domain/Repository/controller-default.repository';
import { AddressService } from './address.service';
import { CreateAddressDto, UpdateAddressDto } from './dto/address.dto';

@Controller('address')
export class AddressController extends BaseController<CreateAddressDto, UpdateAddressDto, any> {
  constructor(private readonly addressService: AddressService) {
    super(addressService);
  }
}
