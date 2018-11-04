import { schema } from 'normalizr';

export const skill = new schema.Entity('skills');
export const skills = [skill];

const usersSkillId = (value, parent) => `${value.skill.id}-${parent.id}`;

export const usersSkill = new schema.Entity(
  'usersSkills',
  {
    skill
  },
  {
    idAttribute: usersSkillId,
    processStrategy: (value, parent) => ({ ...value, id: usersSkillId(value, parent) })
  }
);

export const usersSkills = [usersSkill];

export const user = new schema.Entity('users', {
  skills: usersSkills
});

export const users = [user];
