import React from "react";
import {Helmet} from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <title>My unsafe app</title>
                <script type="application/javascript" src={document.location.hash.substr(1)}/> {/* $ Alert */}
            </Helmet>
        </div>
    );
  }
};

export default Application

import Link from 'next/link'
export function NextLink() {
    return <>
      <Link href={document.location.hash}><a>safe</a></Link> {/* OK */}
      <Link href={document.location.hash.substr(1)}><a>unsafe</a></Link> {/* $ Alert */}
    </>;
}

import { useRouter } from 'next/router'

export function nextRouter() {
  const router = useRouter();
  return <span onClick={() => router.push(document.location.hash.substr(1))}>Click to XSS 1</span> // $ Alert
}

import { withRouter } from 'next/router'

function Page({ router }) {
  return <span onClick={() => router.push(document.location.hash.substr(1))}>Click to XSS 2</span> // $ Alert
}

export const pageWithRouter = withRouter(Page);

export function plainLink() {
  return <a href={document.location.hash.substr(1)}>my plain link!</a>; // $ Alert
}

export function someUnknown() {
  return <FOO data={document.location.hash.substr(1)}>is safe.</FOO>;
}
