import React from 'react'
import Link from 'next/link'

const Agenda = ({ agenda }) => {
    return (
        <div>
            <h3 className="cl-sec mb-4"><i className="bi bi-calendar-check"></i> Agenda</h3>
            <div className="agenda">
                {agenda?.map((item, key) => {
                    let date = new Date(item.agenda_date)
                    let d = date.getDate()
                    let m = date.toLocaleString('id', { month: 'short' });
                    let y = date.toLocaleString('id', { year: '2-digit' });
                    return (
                        <div className="post-item clearfix" key={key}>
                            <div className="calendar-tag">
                                <div className="calendar-tag-month">{`${m} - ${y}`}</div>
                                <div className="calendar-tag-date">{d}</div>
                            </div>
                            <div className="agenda-text">
                                <h5><Link href={`/agenda/${item.slug}`}>{item.title}</Link></h5>
                                <p>{item.title.substring(0, 65)}</p>
                            </div>
                        </div>
                    )
                })}


                {/* <div className="post-item clearfix">
                    <div className="calendar-tag">
                        <div className="calendar-tag-month">Okt</div>
                        <div className="calendar-tag-date">19</div>
                    </div>
                    <div className="agenda-text">
                        <h5><a href="blog-single.html">Agenda menagendakan agenda untuk agenda</a></h5>
                        <p>Please come to this event because it will be amazing with you all</p>
                    </div>
                </div>
                <div className="post-item clearfix">
                    <div className="calendar-tag">
                        <div className="calendar-tag-month">Okt</div>
                        <div className="calendar-tag-date">19</div>
                    </div>
                    <div className="agenda-text">
                        <h5><a href="blog-single.html">Agenda menagendakan agenda untuk agenda</a></h5>
                        <p>Please come to this event because it will be amazing with you all</p>
                    </div>
                </div>
                <div className="post-item clearfix">
                    <div className="calendar-tag">
                        <div className="calendar-tag-month">Okt</div>
                        <div className="calendar-tag-date">19</div>
                    </div>
                    <div className="agenda-text">
                        <h5><a href="blog-single.html">Agenda menagendakan agenda untuk agenda</a></h5>
                        <p>Please come to this event because it will be amazing with you all</p>
                    </div>
                </div>
                <div className="post-item clearfix">
                    <div className="calendar-tag">
                        <div className="calendar-tag-month">Okt</div>
                        <div className="calendar-tag-date">19</div>
                    </div>
                    <div className="agenda-text">
                        <h5><a href="blog-single.html">Agenda menagendakan agenda untuk agenda</a></h5>
                        <p>Please come to this event because it will be amazing with you all</p>
                    </div>
                </div>
                <div className="post-item clearfix">
                    <div className="calendar-tag">
                        <div className="calendar-tag-month">Okt</div>
                        <div className="calendar-tag-date">19</div>
                    </div>
                    <div className="agenda-text">
                        <h5><a href="blog-single.html">Agenda menagendakan agenda untuk agenda</a></h5>
                        <p>Please come to this event because it will be amazing with you all</p>
                    </div>
                </div>
                <div className="post-item clearfix">
                    <div className="calendar-tag">
                        <div className="calendar-tag-month">Okt</div>
                        <div className="calendar-tag-date">19</div>
                    </div>
                    <div className="agenda-text">
                        <h5><a href="blog-single.html">Agenda menagendakan agenda untuk agenda</a></h5>
                        <p>Please come to this event because it will be amazing with you all</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Agenda
