import { merge } from 'lodash';
import Button from './Button';
import TextField from './TextField';

export default function ComponentsOverrides(theme) {
  return merge(Button(theme), TextField(theme));
}
