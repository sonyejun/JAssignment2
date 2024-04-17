import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchWithBaseUrl} from '../api';
import '../Detail.css';

export default function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({ingredients:[]});
    
    useEffect(() => {
        const getRecipe = async () => {
            try {
                const api = `recipe/${id}`;

                const data = await fetchWithBaseUrl(api);
                console.log(data);

                setRecipe(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getRecipe();
    }, []);

    return (
        <>
            <main id='detail'>
                <div className="detailImg"
                    style={
                        { 
                            // backgroundImage: `url(${recipe.thumbnail})`,
                            backgroundColor: '#aaa',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '50% 50%',
                            backgroundSize: 'cover'
                        }
                    }
                ></div>
                <div className="detailBox recipeBox">
                    <h2>{recipe.title}</h2>
                    <div className="subText description">{recipe.description}</div>
                    <div className="subText">
                        <div className="subTitle">Ingredients</div>
                        <div className="ingredients">
                            {recipe.ingredients.map((ingredient, index) => {
                                const text = recipe.ingredients.length - 1 > index ? `${ingredient},` : `${ingredient}`
                                return <span>{text}</span>
                            })}
                        </div>
                    </div>
                    <div className="subText">
                        <div className="subTitle">Instructions</div>
                        <div className='instructions'>{recipe.instructions}</div>
                    </div>
                </div>
            </main>
        </>
    )
};