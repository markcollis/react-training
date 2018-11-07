import { mergeWith, isArray } from 'lodash';
import { getSnapshot, applySnapshot } from 'mobx-state-tree';
import { normalize } from 'normalizr';

export default self => ({
	repositoryHasChanged(repository) {
		const state = getSnapshot(self.entities);
	  applySnapshot(self.entities, mergeWith({}, state, repository, (objValue, srcValue) => {
	    // If merging two arrays, just replace original value
	    // with new one
	    if (isArray(objValue) && isArray(srcValue)) {
	      return srcValue;
	    }

	    // Other values merge as expected
	    return undefined;
	  }));
	},

	normalizeAndStore(data, schema) {
		const { entities, result } = normalize(data, schema);

		self.repositoryHasChanged(entities);
		return result;
	}
});
