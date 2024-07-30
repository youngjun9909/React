import React, { useState } from 'react'

/*
! 일기 앱 구현
- DiaryEntry 컴포넌트
  : Props로 date, content, mood 받음
    >> 일기의 날짜, 내용, 기분을 보여주는 컴포넌트

- DiaryList 컴포넌트
  : 여러 개의 DiaryEntry 컴포넌트를 렌더링
  : 전체 일기 목록과 현재 필터링 된 기분 상태를 props로 받음
  : 선택된 기분 상태에 따라 일기를 필터링하여 표시
    >> filter / map을 사용하여 일기 목록을 처리

// - App 컴포넌트(Review01)
//   : 전체 프로젝트의 루트 컴포넌트
//   : 일기 목록과 현재 선택된 기분 필터 상태를 관리 (>> useState 학습)
//   : 조건부 렌더링을 사용하여 필터 옵션을 표시
// */

//? 타입 정의
// 1) DiaryEntryProps
type DiaryEntryProps = {
  date: string;
  content: string;
  mood: Mood;
}

// 2) Mood >> 좋음 또는 나쁨 또는 보통 중 하나
type Mood = '좋음' | '나쁨' | '보통'


//& DiaryEntry
const DiaryEntry = ({date, content, mood}: DiaryEntryProps) => {
  return (
    <div>
      <h2>{date}</h2>
      <p>{content}</p>
      <p>{mood}</p>
    </div>
  );
};

type DiaryListProps = {
  entries: DiaryEntryProps[];
  filterMood: Mood;
}

//& DiaryList
const DiaryList = ({entries, filterMood}: DiaryListProps) => {
  const filteredEntries = entries
  .filter(entry => entry.mood === filterMood);

  return (
    <div>
       {/* 배열을 렌더링할 때 각각의 고유값을 전달 key값 */}
        {filteredEntries.map((entry, index) => (
          <DiaryEntry
          key={index}
          date={entry.date}
          content={entry.content}
          mood={entry.mood}/>
        ))}
    </div>
  );
}


export default function Review01() {
  const entries: DiaryEntryProps[] = [
    {
      date: '2024-04-20', content: '오늘 비가 옵니다.', mood: '좋음'
    },
    {
      date: '2024-04-19', content: '피자를 먹었습니다.', mood: '좋음'
    },
    {
      date: '2024-04-18', content: '평범한 하루였습니다.', mood: '나쁨'
    },
    {
      date: '2024-04-17', content: '평범한 하루였습니다.', mood: '나쁨'
    },
  ]; 

  const [filterMood, setFilterMood] = useState<Mood>('좋음');

  return (
    <div>
      <h2>일기 앱</h2>
      <div>
        <label> 좋음
          <input type="radio"
            value="좋음"
            checked={filterMood === '좋음'}
            onChange={(e) => setFilterMood(e.target.value as Mood)}/>
          </label>
          <label> 보통
        <input type="radio"
          value="보통"
          checked={filterMood === '보통'}
          onChange={(e) => setFilterMood(e.target.value as Mood)}/>
          </label>
          <label>나쁨
        <input type="radio"
          value="나쁨"
          checked={filterMood === '나쁨'}
          onChange={(e) => setFilterMood(e.target.value as Mood)}/>
          </label>
      </div>
      <DiaryList entries={entries} filterMood={filterMood} />
    </div>
  )
}
