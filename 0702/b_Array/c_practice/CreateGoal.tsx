import React, { ChangeEvent } from 'react'
import { Goal } from './GoalApp';

interface GoalProps {
  goal: Omit<Goal, 'id' | 'active'>;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void
  onCreate: () => void
}

export default function CreateGoal({goal, onChange, onCreate}: GoalProps) {
  const {title, explanation} = goal;


  return (
    <div>
      <input 
        type="text" 
        name='title' 
        value={goal.title} 
        placeholder='목표를 입력하세요'
        onChange={onChange}
      />
      <input 
        type="text" 
        name='explanation' 
        value={goal.explanation} 
        placeholder='설명을 입력하세요'
        onChange={onChange}
      />
      <button onClick={onCreate}>목표 추가</button>
    </div>
  )
}
