import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FieldResolver, Root, Query } from 'type-graphql';
import { Machine, MachineInput } from './machine.types';
import { MachineService } from './machine.service';
// import { MachineService } from './machine.service';
// import { Machine, MachineInput } from './';

@Resolver(() => Machine)
export class MachineResolver {
    constructor(private readonly machineService: MachineService) {

    }
    @Query(() => [Machine])
    async machines() {
    }

    @Query(() => Machine)
    async machine(@Args('id', { type: String }) id: string) {
    }

    @Mutation(() => MachineInput)
    async addMachine(@Args('machine') machine: MachineInput) {
    }

    @FieldResolver()
    sweetsProducedByMachine(@Root() machine: Machine) {
        this.machineService.findSweetsForMachine(machine.id)
    }
}