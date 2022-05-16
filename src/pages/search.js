import * as React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/global/Layout'
import Seo from '../components/global/Seo';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, connectHits, Highlight } from 'react-instantsearch-dom';

export default function Search() {
    const searchDocs = algoliasearch(
        '5DJH9I3ZKM',
        '2df1244844622c13708b66f76ca704a9'
    );


    const Hits = connectHits(({ hits }) => (
        <div>
            {hits.length ? (
                <>

                    {hits.map(hit => {
                        return (
                            <div className="" key={hit.objectID}>
                                <Link
                                    to={"/documentation" + hit.slug}
                                >
                                    <h2 className="uk-h4">
                                        <Highlight attribute="title" hit={hit} tagName="strong" />
                                    </h2>
                                    {hit.subtitle ? (
                                        <h5>
                                            <Highlight
                                                attribute="subtitle"
                                                hit={hit}
                                                tagName="strong"
                                            />
                                        </h5>
                                    ) : null}
                                <div>
                                    <Highlight attribute="excerpt" hit={hit} tagName="strong" />
                                </div>
                                </Link>
                            </div>
                        )
                    })}
                </>
            ) : (
                <p>There were no results for your query. Please try again.</p>
            )}
        </div>
    ))

    return (
        <Layout>
            <Seo
                title="Search Documentation | Hungry Ram Web Design"
                description="Search our documentation on customizing your website content and appearance."
            />
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <div>
                        <div className="uk-width-expand@s">
                            <h2>How can we help?</h2>
                            <p>This search box searches our documentation for customizing our websites. We currently do not provide sitewide searches but we plan on it soon!</p>
                            <InstantSearch
                                indexName="Documentation"
                                searchClient={searchDocs}
                            >
                                <SearchBox className=""/>
                                <h2>Result</h2>
                                <Hits />
                            </InstantSearch>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}