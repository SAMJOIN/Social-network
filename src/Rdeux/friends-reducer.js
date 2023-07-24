
let initState = {
    friends: [
        { id: '1', name: 'Danil', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTre6ATP5zDhQoi6FfQGewIGb0cEhfxmtr6Ug&usqp=CAU' },
        { id: '2', name: 'Dasha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vmPXI7A7LwZc1H2KmxM-LyRpnocS6o6XnWxZgDe-cUCW29_OVJMPP5c11ZQZyrX0iWE&usqp=CAU' },
        { id: '3', name: 'Vlada', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfaxy8H42HWVq0AfuMDUiStXnkXWUjOlK_3w&usqp=CAU' }
    ]
}

const friendsReducer = (state = initState, action) => {
    return state;
}

export default friendsReducer;