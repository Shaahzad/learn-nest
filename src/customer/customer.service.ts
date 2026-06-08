import { Injectable } from '@nestjs/common';
import { Customer } from './Interface/customer.interface';
import { CreateCustomerDTO } from './DTO/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer [] = []

    getAllCustomers(): Customer[] {
        return this.customers
    }

    addCustomer(CreateCustomerDTO: CreateCustomerDTO): Customer {
        const newCustomer: Customer = {
            id: Date.now(),
            ...CreateCustomerDTO
        };
        this.customers.push(newCustomer)
        return newCustomer
    }
}
