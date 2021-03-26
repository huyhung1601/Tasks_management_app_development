/**
 * Data from server
 */

// get list tasks
const listTaskResponse = {
    success: true,
    error: '',
    data: [
        {
            id: 1,
            title: ' Task 1',
            description: 'This is the first task!'
        },
        {
            id: 2,
            title: ' Task 2',
            description: 'This is the second task!'
        }
    ]
}

// add new task from dashboard: data submit to server
const addNewStaskSubmit = {
    title: 'new task'
}
const addNewStaskResponse = {
    success: true,
    error: '',
    data: {
        id: '100000',
        title: 'new task'
    }
}

// edit task full: submit
const editStaskSubmitFull = {
    id: '100000',
    title: 'new task',
    description: '',
    duedate: '',
    members: [6, 3, 5], // ids
    checklist: [
        {
            id: 1,
            text: ''
        }
    ]
}
// on page load
const editStaskSubmitReponse = {
    success: true,
    error: '',
    data: {
        id: '100000',
        title: 'new task',
        description: '',
        duedate: '',
        members: [6, 3, 5], // ids
        checklist: [
            {
                id: 1,
                text: ''
            }
        ]
    }
}

const {checklist}=editStaskSubmitReponse.success()? editStaskSubmitReponse.data;

console.log(checklist)
// login
const loginSubmit = {
    username: '',
    password: ''
}
const loginReponse = {
    success: true,
    error: '',
    data: {
        jwt: 'xx',
        error: '',
        success: true
    }
}
// register
const registerSubmit = {
    username: '',
    password: '',
    confirmPassword: ''
}
const registerReponse = {
    success: true,
    error: '',
    data: {
        jwt: 'xx',
        error: '',
        success: true
    }
}