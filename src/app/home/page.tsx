import React from 'react'
import { GetServerSideProps } from 'next'

type Repo = {
    name: string
    stargazers_count: number
  }

export default function Home() {
    return (

        <div>
            <div className="container d-flex">
                <div className="row mt-5">
                    <div className="col-6 col-lg-4 col-md-4 px-2">
                        <div className="card">
                            <img
                                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                className="card-img-top"
                                width="100%"
                            />
                            <div className="card-body pt-0 px-0">
                                <div
                                    className="d-flex flex-row justify-content-between mb-0 px-3 py-3"
                                >
                                    <h6>Royal Enfield Meteor 350</h6>
                                </div>

                                <div
                                    className="d-flex flex-row justify-content-between py-2 px-3 mid"
                                >
                                    <div className="d-flex flex-column">
                                        <small className="text-muted mb-1 mr-4">LOCATION</small>
                                        <div className="d-flex flex-row">
                                            <div className="d-flex flex-column">
                                                <p className="u2w-profuct-listing-feature-value mb-0">
                                                    Bangalore
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <small className="text-muted mb-2">KM driven</small>
                                        <div className="d-flex flex-row">
                                            <p className="u2w-profuct-listing-feature-value mb-0">1350</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-row justify-content-between px-3 pt-3">
                                    <div className="d-flex flex-column">
                                        <span className="text-muted">Brand Name</span
                                        ><small className="text-muted">Model Year</small>
                                    </div>
                                    <div className="d-flex flex-column text-right">
                                        <h5 className="mb-0">Royal Enfield</h5>
                                        <small className="text-muted text-right">(2017)</small>
                                    </div>
                                </div>

                                <hr className="mt-2 mx-3" />

                                <div className="mx-3 mt-3 mb-2 text-center">
                                    <button type="button" className="btn btn-danger btn-inline">
                                        <small>BID NOW</small>
                                    </button>

                                    <img src="icons8-whatsapp.gif" alt="" width="40" />
                                </div>
                                <small className="d-flex justify-content-center text-muted"
                                >*Legal Disclaimer</small
                                >
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 col-md-4 px-2">
                        <div className="card">
                            <img
                                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                className="card-img-top"
                                width="100%"
                            />
                            <div className="card-body pt-0 px-0">
                                <div
                                    className="d-flex flex-row justify-content-between mb-0 px-3 pt-2"
                                >
                                    <span className="text-muted mt-1">Model Name</span>
                                    <h6>OKinawa Praise</h6>
                                </div>
                                <hr className="mt-2 mx-3" />
                                <div className="d-flex flex-row justify-content-between px-3 pb-4">
                                    <div className="d-flex flex-column">
                                        <span className="text-muted">Fuel Efficiency</span
                                        ><small className="text-muted">L/100KM&ast;</small>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <h5 className="mb-0">8.5/7.1</h5>
                                        <small className="text-muted text-right">(city/Hwy)</small>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-between p-3 mid">
                                    <div className="d-flex flex-column">
                                        <small className="text-muted mb-1">ENGINE</small>
                                        <div className="d-flex flex-row">
                                            <img
                                                src="https://imgur.com/iPtsG7I.png"
                                                width="35px"
                                                height="25px"
                                            />
                                            <div className="d-flex flex-column ml-1">
                                                <small className="ghj">1.4L MultiAir</small
                                                ><small className="ghj">16V I-4 Turbo</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <small className="text-muted mb-2">HORSEPOWER</small>
                                        <div className="d-flex flex-row">
                                            <img src="https://imgur.com/J11mEBq.png" />
                                            <h6 className="ml-1">135 hp&ast;</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="mx-3 mt-3 mb-2 text-center">
                                    <button type="button" className="btn btn-danger btn-inline">
                                        <small>BID NOW</small>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-inline float-right"
                                    >
                                        <small>w</small>
                                    </button>
                                </div>
                                <small className="d-flex justify-content-center text-muted"
                                >*Legal Disclaimer</small
                                >
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 col-md-4 px-2">
                        <div className="card">
                            <img
                                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                className="card-img-top"
                                width="100%"
                            />
                            <div className="card-body pt-0 px-0">
                                <div
                                    className="d-flex flex-row justify-content-between mb-0 px-3 pt-2"
                                >
                                    <span className="text-muted mt-1">Model Name</span>
                                    <h6>OKinawa Praise</h6>
                                </div>
                                <hr className="mt-2 mx-3" />
                                <div className="d-flex flex-row justify-content-between px-3 pb-4">
                                    <div className="d-flex flex-column">
                                        <span className="text-muted">Fuel Efficiency</span
                                        ><small className="text-muted">L/100KM&ast;</small>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <h5 className="mb-0">8.5/7.1</h5>
                                        <small className="text-muted text-right">(city/Hwy)</small>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-between p-3 mid">
                                    <div className="d-flex flex-column">
                                        <small className="text-muted mb-1">ENGINE</small>
                                        <div className="d-flex flex-row">
                                            <img
                                                src="https://imgur.com/iPtsG7I.png"
                                                width="35px"
                                                height="25px"
                                            />
                                            <div className="d-flex flex-column ml-1">
                                                <small className="ghj">1.4L MultiAir</small
                                                ><small className="ghj">16V I-4 Turbo</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <small className="text-muted mb-2">HORSEPOWER</small>
                                        <div className="d-flex flex-row">
                                            <img src="https://imgur.com/J11mEBq.png" />
                                            <h6 className="ml-1">135 hp&ast;</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="mx-3 mt-3 mb-2 text-center">
                                    <button type="button" className="btn btn-danger btn-inline">
                                        <small>BID NOW</small>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-inline float-right"
                                    >
                                        <small>w</small>
                                    </button>
                                </div>
                                <small className="d-flex justify-content-center text-muted"
                                >*Legal Disclaimer</small
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

{/* export const getServerSideProps: GetServerSideProps<{
    repo: Repo
}> = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return { props: { repo } }
} */}

