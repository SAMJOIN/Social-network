let state = {
    profilePage: {
        posts: [
            { id: '1', message: 'Hi', likeCount: 23 },
            { id: '2', message: 'How are you?', likeCount: 10 },
            { id: '3', message: 'I am SAMJOIN', likeCount: 123 }
        ],
    },
    dialogsPage: {
        messages: [
            { id: '1', message: 'Hi' },
            { id: '2', message: 'Hello' },
            { id: '3', message: 'How a y?' }
        ],
        dialogs: [
            { id: '1', name: 'Dima' },
            { id: '2', name: 'Nikita' },
            { id: '3', name: 'Vlada' }
        ]
    },
    friends: [
        { id: '1', name: 'Danil', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTre6ATP5zDhQoi6FfQGewIGb0cEhfxmtr6Ug&usqp=CAU'},
        { id: '2', name: 'Dasha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vmPXI7A7LwZc1H2KmxM-LyRpnocS6o6XnWxZgDe-cUCW29_OVJMPP5c11ZQZyrX0iWE&usqp=CAU'},
        { id: '3', name: 'Vlada', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfaxy8H42HWVq0AfuMDUiStXnkXWUjOlK_3w&usqp=CAU'}
    ]
}

export default state;