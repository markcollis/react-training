import { getSnapshot } from 'mobx-state-tree';

export default self => ({
  get skills() {
    return getSnapshot(self.entities.skills);
  },

  get usersSkills() {
    const { entities: { usersSkills: observableUsersSkills }, skills } = self;
    const usersSkills = getSnapshot(observableUsersSkills);
    return Object.keys(usersSkills).reduce(
      (memo, userSkillId) => ({
        ...memo,
        [userSkillId]: {
          ...usersSkills[userSkillId],
          skill: skills[usersSkills[userSkillId].skill]
        }
      }),
      {}
    );
  },

  get users() {
    const { entities: { users: observableUsers }, usersSkills } = self;
    const users = getSnapshot(observableUsers);
    return Object.keys(users).reduce(
      (memo, userId) => ({
        ...memo,
        [userId]: {
          ...users[userId],
          skills: users[userId].skills.map(
            userSkillId => usersSkills[userSkillId]
          )
        }
      }),
      {}
    );
  },
});
