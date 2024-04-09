import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Rating from 'react-rating-stars-component'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {setSearchCard} from '../../redux/search/searchSlice'
import ChildCard from './ChildCards/ChildSearchCard'

function SearchCard() {
    const dispatch = useDispatch()
    const {searchCard} = useSelector((state) => state.search)
    const searchTerm = useParams()
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/api/product/search/${searchTerm.searchTerm}`,
                {withCredentials: true},
            )
            dispatch(setSearchCard(response.data.data))
        } catch (err) {
            console.error(err)
        }
    }

    const showProduct = async (id) => {
        await axios.get(`http://localhost:3000/api/product/showProduct/${id}`)
        navigate(`/showProduct/${id}`)
    }

    useEffect(() => {
        fetchData()
    }, [searchTerm])

    return (
        <div className="container mx-auto p-3">
            <h1 className="text-xl font-semibold mb-8">
                Search Results for "{searchTerm.searchTerm}"
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchCard &&
                    searchCard.map((item) => (
                        <ChildCard
                            key={item._id}
                            item={item}
                            showProduct={showProduct}
                        />
                    ))}
            </div>
        </div>
    )
}

export default SearchCard