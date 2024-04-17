import { Link } from "react-router-dom";
import Toplist from "../components/Toplist";
import Visual from "../components/Visual";

export default function Home() {
    const sections = ['Recipes', 'Books'];
    return (
        <>
            <Visual pageTitle={'Check out various Cooking information'} />
            <main id='main'>
                {sections.map((section, index) => (
                    <section key={index}>
                        <h2>{section === 'Recipes' ? 'Top 4 Latest Recipes' : 'Top 4 Latest Books'}</h2>
                        <Toplist
                            section={section}
                        />
                        <Link to={`/${section}`} class="btn moreList">More {section} lists</Link>
                    </section>
                ))}
            </main>
        </>
    )
};