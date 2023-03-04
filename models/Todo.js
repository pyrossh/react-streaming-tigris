import { TigrisDataTypes, Generated } from "@tigrisdata/core";
import PropTypes from 'prop-types';

export const TodoItemSchema = {
  id: {
    type: TigrisDataTypes.STRING,
    default: Generated.CUID,
    primary_key: { order: 1 }
  },
  text: { type: TigrisDataTypes.STRING },
  completed: { type: TigrisDataTypes.BOOLEAN }
};


export const TodoPropType = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  date: PropTypes.instanceOf(Date),
};