import React from 'react';

export default function List(){
    const list= [1,2,3, 4, 5];
    const students = [
        {
            'id':1,
            'name':'Jack',
            'email':'jack@gmail.com'
        },
        {
            'id':2,
            'name':'Mary',
            'email':'mary@gmail.com'
        },
        {
            'id':3,
            'name':'John',
            'email':'john@gmail.com'
        }
    ]

    const thTdStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
    }
return(
    <>
    {list.map(listItem=>
    (
        <li>{listItem}</li>

    ))}
    <h1>Example of React Map Loop</h1>
    <table style={{border:'2px dotted '}}>
        <tr>
            <th style={thTdStyle}>ID</th>
            <th style = {thTdStyle}>Name</th>
            <th style={thTdStyle}>Email</th>
        </tr>
        {students.map((student,index)=>(
            <tr data-index={index}>
                <td style={thTdStyle}>{student.id}</td>
                <td style={thTdStyle}>{student.name}</td>
                <td style={thTdStyle}>{student.email}</td>
            </tr>
        ))}
    </table>
    </>
)
}