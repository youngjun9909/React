import React from 'react'

export default function JSX03() {
    // const url = 'https://cdn.pixabay.com/photo/2019/04/10/23/51/animal-4118585_1280.jpg'
  
  const baseUrl = 'https://cdn.pixabay.com/photo/'

  const dog = {
    date: '2019/04/10/',
    description: '23/51/',
    imageId: 'animal-4118585_1280',
    name: '강아지',
    theme: {
      backgroundColor: 'gray',
      color: 'pink',
    },
    imageTheme: {
      width: '300px',
      height: '250px'
    }
  };

  return (
    <div style={dog.theme}>
      <p>{dog.name}'s Picture</p>
      <img 
      src={baseUrl + dog.date + dog.description + dog.imageId + '.jpg'} 
      alt={dog.name}
      width={dog.imageTheme.width}
      height={dog.imageTheme.height}  />

    </div>
  )
}
