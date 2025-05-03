import { ERole } from "@/enums/role.enum";
import { roleRepository } from "@/repositories/role.repository";
import { userRoleRepository } from "@/repositories/user-role.respository";

class RoleService {
    async ensureRoleExists(role: ERole) {
      const existingRole = await roleRepository.findByName(role);
      if (!existingRole) {
        await roleRepository.create(role);
      }
    }

    async assignRoleToUser(userId: string, role: ERole) {
      await this.ensureRoleExists(role);
  
      const roleToAssign = await roleRepository.findByName(role);
      if (!roleToAssign) throw new Error(`Role ${role} not found`);
  
      await userRoleRepository.create(userId, roleToAssign.id);
    }

    async getUserRoles(userId: string): Promise<string[]> {
        const userRoles = await userRoleRepository.getById(userId);
    
        return userRoles.map((ur: any) => ur.role.name);
    };
  }
  
  export default new RoleService();