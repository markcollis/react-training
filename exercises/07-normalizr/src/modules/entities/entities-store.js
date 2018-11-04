import { types } from 'mobx-state-tree';

const Skill = types.model({
	id: types.string,
	name: types.string,
});

const UsersSkill = types.model({
	skill: types.string,
	level: types.number,
});

const User = types.model({
	id: types.string,
	firstName: types.string,
	lastName: types.string,
	regnalNumber: types.number,
	skills: types.array(types.string)
});

const Store = types.model({
	users: types.optional(types.map(User), {}),
	skills: types.optional(types.map(Skill), {}),
	usersSkills: types.optional(types.map(UsersSkill), {}),
});

export default Store;
