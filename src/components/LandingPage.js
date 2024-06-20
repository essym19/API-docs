import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold">API Documentation Hub</h1>
        <p className="text-xl text-gray-600 mt-4">Learn and explore the Unsplash Photos API and Rick & Morty API</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-left">What is an API?</h2>
        <p className="text-lg">
          API is short for 'Application Programming Interface'. An API is a set of rules that lets programs talk to each other, exposing data and functionality across the Internet in a consistent format.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Explore APIs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Unsplash Photos API</h3>
            <p className="text-lg mb-4">
              The Unsplash Photos API provides applications and websites seamless access to Unsplash, a massive library of high-quality royalty-free stock photos.
            </p>
            <div className="mb-4">
              <h4 className="text-xl font-semibold">With this API, you can:</h4>
              <ul className="list-disc list-inside text-lg pl-4 mt-2">
                <li>Integrate images into your applications, workflows, and digital experiences without concerns for licensing fees or copyright.</li>
                <li>Create image galleries within your applications with features like image search and download.</li>
                <li>Enrich blog posts and social media content with high-quality images and free relating to different topics.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold">How to integrate the API:</h4>
              <ol className="list-decimal list-inside text-lg pl-4 mt-2">
                <li>Sign up on the <a href="https://unsplash.com/documentation" className="text-blue-500">Unsplash Developers platform</a> to obtain your access key.</li>
                <li>Integrate the key into your application or website using your preferred programming language.</li>
                <li>Utilize HTTP methods like 'GET' to make requests to the API's endpoints.</li>
                <li>Receive and process the responses in JSON format, containing the requested image data and metadata.</li>
              </ol>
            </div>
            <Link to="/unsplash" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">Explore Unsplash API use-case</Link>
          </div>

          <div className="bg-gray-200 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Rick & Morty API</h3>
            <p className="text-lg mb-4">
              The Rick and Morty API provides access to information and data related to the popular animated series "Rick and Morty."
            </p>
            <div className="mb-4">
              <h4 className="text-xl font-semibold">How you can use the API:</h4>
              <ul className="list-disc list-inside text-lg pl-4 mt-2">
                <li>Create interactive character profiles, games, or websites that serve as comprehensive resources for the show's fans.</li>
                <li>Fuel your social media content by pulling quotes, episodes, or fun facts from the show to engage your audience.</li>
                <li>Businesses selling the show’s merchandise can integrate the API to enhance product pages with details related to items sold.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold">How to integrate the API:</h4>
              <ol className="list-decimal list-inside text-lg pl-4 mt-2">
                <li>Visit the official <a href="https://rickandmortyapi.com/documentation/" className="text-blue-500">Rick and Morty API documentation</a> to get information on the API.</li>
                <li>Integrate the API into your application or website with your preferred programming language.</li>
                <li>Utilize HTTP methods like 'GET' to make requests to the API's endpoints.</li>
                <li>Receive and process the responses in JSON format, containing the requested data and metadata.</li>
              </ol>
            </div>
            <Link to="/rickandmorty" className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block">Explore Rick & Morty API use-case</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;