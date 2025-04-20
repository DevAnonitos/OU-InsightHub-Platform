import { prisma } from "@/configs/prisma.config";

// Tạo mối quan hệ giữa user và role
export const create = (userId: string, roleId: string) => {
  return prisma.userRole.create({
    data: {
      userId,
      roleId,
    },
  });
};

export const getById = (userId: string) => {
    return prisma.userRole.findMany({
        where: {
            userId,
        },
        include: {
            role: true,
        },
    });

}

export const userRoleRepository = {
    create,
    getById,
};