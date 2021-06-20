import { merge } from 'lodash';
import Button from './Button';

export default function ComponentsOverrides(theme) {
  return merge(Button(theme));
}
