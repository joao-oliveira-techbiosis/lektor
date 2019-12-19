import React from 'react';
import Tooltip from "../components/tooltip/tooltip";
import Hyphenated from 'react-hyphen';
import { StaticQuery, graphql } from 'gatsby';
import reactStringReplace from 'react-string-replace';
import { Link } from "gatsby"

import "./page.scss";

const query = graphql`
query DemoQuery {
  allDemoJson {
    edges {
      node {
        Word___Phrase_in_the_text
        Translation_definition
        Tradu__o_Literal
        Short_Translation___Definition__bold_
        Register
        Long_Translation___Definition__bold_
        Headword
        Context
        EXAMPLES_SENTENCES
      }
    }
  }
}
`;

class Page extends React.PureComponent {

    renderTextLine = (dictionary, textLine) => {
        let replacedLine = textLine;

        const sortedDictionary = dictionary.sort(function (a, b) {
            if (a.node.Word___Phrase_in_the_text.length > b.node.Word___Phrase_in_the_text.length) {
                return -1;
            }
            if (b.node.Word___Phrase_in_the_text.length > a.node.Word___Phrase_in_the_text.length) {
                return 1;
            }
            return 0;
        });

        sortedDictionary.map((elem) => {
            replacedLine = reactStringReplace(replacedLine, elem.node.Word___Phrase_in_the_text, (match, i) => (
                <Tooltip word={match}>
                    {elem.node.Headword} - {elem.node.Short_Translation___Definition__bold_} - {elem.node.Long_Translation___Definition__bold_}
                </Tooltip>
            ));
        });

        return replacedLine;
    };

    renderText = (dictionary) => {
        const text = [
            "Once upon a time there were four little Rabbits, and their names were —",
            "Flopsy, Mopsy, Cotton-tail, and Peter.",
            "They lived with their Mother in a sand-bank, underneath the root of a very big fir-tree.‘Now, my dears,' said old Mrs. Rabbit one morning, 'you may go into the fields or down the lane, but don't go into Mr. McGregor's garden.",
        ];

        return text.map((textLine) => <p>{this.renderTextLine(dictionary, textLine)}</p>);
    }

    render() {
        return (
            <div className="page swing-in-top-bck">
                <div className="page-navigation">
                    <div className="page-navigation-container">
                        <Link to="/library" className="page-navigation-item">
                            <img src="/icons/back.svg" alt="Italian Trulli"></img>
                        </Link>
                        <img className="page-navigation-item" src="/icons/contents.svg" alt="Italian Trulli"></img>
                        <img className="page-navigation-item" src="/icons/text size.svg" alt="Italian Trulli"></img>
                        <img className="page-navigation-item" src="/icons/search.svg" alt="Italian Trulli"></img>
                        <img className="page-navigation-item" src="/icons/settings.svg" alt="Italian Trulli"></img>
                        <img className="page-navigation-item" src="/icons/bookmarks_off.svg" alt="Italian Trulli"></img>
                    </div>
                </div>

                <div className="page-content-container">
                    <p className="title">The Tale of PETER RABBIT</p>
                    <p className="subtitle">By BEATRIX POTTER</p>
                    {/*<Hyphenated>*/}
                    <StaticQuery
                        query={query}
                        render={data => this.renderText(data.allDemoJson.edges)}
                    />
                    {/*</Hyphenated>*/}
                </div>
            </div>
        );
    }
}

export default Page;
