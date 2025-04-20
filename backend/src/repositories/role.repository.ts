import { ERole } from "@/enums/role.enum";
import { prisma } from "@/configs/prisma.config";

export const create = (role: ERole) => {
  return prisma.role.create({
    data: {
      name: role,
    },
  });
};

export const findByName = (role: ERole) => {
  return prisma.role.findFirst({ where: { name: role }});
};

export const roleRepository = {
  create,
  findByName,
};