import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'

export default function Contact() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Header headerText='Contact' />
            <p>Mantap ini halaman contact bro</p>
        </div>
    )
}