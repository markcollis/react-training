import { types } from 'mobx-state-tree';

const Skill = types.model({
	id: types.identifier,
	name: types.string,
});

const UsersSkill = types.model({
	id: types.identifier,
	skill: types.reference(Skill),
	level: types.number,
});

export const User = types.model({
	id: types.identifier,
	firstName: types.string,
	lastName: types.string,
	regnalNumber: types.number,
	skills: types.array(types.reference(UsersSkill))
});

const Store = types.model({
	users: types.optional(types.map(User), {}),
	skills: types.optional(types.map(Skill), {}),
	usersSkills: types.optional(types.map(UsersSkill), {}),
});

export default Store;
