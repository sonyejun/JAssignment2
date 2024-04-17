import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWithBaseUrl } from '../api';
import '../Detail.css';

export default function Book() {
    const { id } = useParams();
    const [book, setBook] = useState({ ingredients: [] });

    useEffect(() => {
        const getBook = async () => {
            try {
                const api = `book/${id}`;

                const data = await fetchWithBaseUrl(api);
                console.log(data);

                setBook(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getBook();
    }, []);

    return (
        <>
            <main id='detail'>
                <div className="detailImg"
                    style={
                        {
                            // backgroundImage: `url(${book.thumbnail})`,
                            backgroundColor: '#aaa',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '50% 30%',
                            backgroundSize: 'cover'
                        }
                    }
                ></div>
                <div className="detailBox bookBox">
                    <div className="detailInnerBox">
                        <div className="leftBox">
                            <div className="poster"
                                style={
                                    {
                                        // backgroundImage: `url(${book.poster})`,
                                        backgroundColor: '#aaa',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: '50% 50%',
                                        backgroundSize: 'cover'
                                    }
                                }
                            ></div>
                        </div>
                        <div className="rightBox">
                            <div className="title">{book.title}</div>
                            <div className="subText author">
                                <div className="subTitle">Author</div>
                                <div id="author">{book.author}</div>
                            </div>
                            <div className="subText pages">
                                <div className="subTitle">Pages</div>
                                <div id="pages">{book.pages}</div>
                            </div>
                            <div className="subText publisher">
                                <div className="subTitle">Publisher</div>
                                <div id="publisher">{book.publisher}</div>
                            </div>
                            <div className="subText publishedDate">
                                <div className="subTitle">published Date</div>
                                <div id="publishedDate">{book.published_date}</div>
                            </div>
                        </div>
                    </div>
                    <div className="descriptionBox">
                        <div className="subTitle">description</div>
                        <div className="description" id="description">
                            {book.description}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};