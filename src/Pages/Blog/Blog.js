import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='my-10 px-[5%]'>
            <div>
                <h1 className='text-2xl'>1. Deffereance Between Sql vs NoSql ?</h1>
                <h2># SQL</h2>
                <li>Free and open-source </li>
                <li>Extremely established database with a huge community, extensive testing, and lots of stability</li>
                <li>Available for all major platforms</li>
                <li>Replication and sharding are available</li>
                <li>Covers a wide range of use cases </li>
            </div>
            <div>
                <h2># NOSQL</h2>
                <li>Free to use </li>
                <li>Dynamic schema </li>
                <li>Horizontally scalable </li>
                <li>Excellent performance with simple queries</li>
                <li>Add new columns and fields without impacting your existing rows or the application’s performance</li>
            </div>

            <br />

            <div>
                <h1 className='text-2xl'>2. What is Jwt ? and how does it work ?</h1>
                <h2># JWT</h2>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>

                <h2 className='text-xl'># how does it work</h2>
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                <br />
                <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                <br />
                <h3>Once decoded, you will get two JSON strings:</h3>
                <li>The header and the payload.</li>
                <li>The signature. </li>
            </div>

            <br />

            <div>
                <h1 className='text-2xl'>3. What is Defference Between Javascript and Node Js ?</h1>
                <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.</p>
                <p>JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.</p>
                <p>JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.</p>
                <p>JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development</p>
                <p>JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.</p>
                <br />
                <p>JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</p>
            </div>

            <div>
                <h1 className='text-2xl'>4. How does NodeJS handle multiple requests at the same time?</h1>
                <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>

        </div>
    );
};

export default Blog;