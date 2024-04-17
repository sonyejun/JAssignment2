import { Link } from 'react-router-dom';

export default function Listelement({section, key, data}) {
    const detailPage = section === 'Recipes' ? 'Recipe' : 'Book';
    const listText = section === 'Recipes' ? data.description : data.author;
    return (
        <>
            <li key={key}>
                <Link to ={`/${detailPage}/${data._id}`}>
                    <span 
                        className="listImg" 
                        style={
                            { backgroundImage: `url(${data.thumbnail})`, backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundSize: 'cover' }
                        }
                    ></span>
                </Link>
                <div class="listTitle">{data.title}</div>
                <div class="listText">{listText}</div>
            </li>
        </>
    )
};