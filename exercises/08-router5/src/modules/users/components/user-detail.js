import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import { modelOf } from 'modules/mobx-prop-types';
import { UsersSkills } from 'modules/entities/entities-store';

const UserDetail = ({ userDetail }) => {
  if (!userDetail) {
    return 'Loading...';
  }

  const { id, firstName, lastName, regnalNumber, skills } = userDetail;

  return (
    <div>
      <div>I'm {firstName} {regnalNumber} {lastName}</div>
      <div>I can:</div>
      <ul>
        {skills.map(({ skill, level }) => (
          <li key={`${skill.id}-${id}`}>
            {skill.name} (level {level})
          </li>
        ))}
      </ul>
    </div>
  );
};

UserDetail.propTypes = {
  userDetail: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    regnalNumber: PropTypes.string.isRequired,
    skills: modelOf(UsersSkills).isRequired
  })
};

const mapStoreToProps = ({ store }) => ({
  userDetail: store.decoratedUserDetail
});

export default inject(mapStoreToProps)(observer(UserDetail));
