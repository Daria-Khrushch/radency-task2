import React, {FC} from 'react';
import {ReactComponent as Task  } from '../../icons/buy.svg';
import { ReactComponent as Idea } from '../../icons/lamp.svg';
import { ReactComponent as RandomThought } from '../../icons/mind.svg';
import { ReactComponent as Quote } from '../../icons/double-quotes-svgrepo-com.svg';

interface Props {
  category: string;
  width: string;
  height: string;
  fill?: string;
};

interface Icons {
  category: string;
  icon: any;
}

const icons:Icons[] = [
  {
    category: 'Task',
    icon: Task
  },
  {
    category: 'Idea',
    icon: Idea
  },
  {
    category: 'Random Thought',
    icon: RandomThought
  },
  {
    category: 'Quote',
    icon: Quote
  }
];

export interface CustomItemProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Icon:FC<Props> = ({ category, width, height, fill }) => {
  const IconRender:typeof React.Component = icons.find(option => option.category === category)?.icon
  return (
    <IconRender width={width} height={height} fill={fill}/>
  )
}

export default Icon;
