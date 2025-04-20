import { prisma } from "@/configs/prisma.config";

export const create = (data: any) => {
  return prisma.user.create({ data });
};

export const findAll = () => {
  return prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
    }
  });
}

export const findById = (id: string) => {
  return prisma.user.findUnique({ 
    where: { id },
    // include: {
    //   userRoles: {
    //     include: {
    //       role: true,
    //     }
    //   }
    // } 
  });
};

export const findByEmail = (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};


export const findByUsername = (username: string) => {
  return;
};


export const updateById = (id: string, data: any) => {
  return prisma.user.update({ 
    where: { id }, 
    data 
  });
};

export const verifyEmail = () => {
  return;
};

export const existByEmail = (email: string) => {
  return prisma.user.findUnique({ where: { email } })
}

export const removeById = (id: string) => {
  return prisma.user.delete({ where: { id } });
};

export const removeMany = () => {
  return;
};

export const userRepository = {
  create,
  findAll,
  findById,
  findByEmail,
  findByUsername,
  updateById,
  existByEmail,
  removeById,
  removeMany,
};