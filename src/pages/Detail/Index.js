import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getDetail } from '../../redux/actions/filmAction';

const Index = (props) => {
    const dispatch = useDispatch()
    const {detailFilm} = useSelector((state) => state.FilmReducer) || {}

    const {id} = useParams()
      useEffect(() => {
        dispatch(getDetail(id))
        
      }  
      , [])
      console.log(detailFilm)
    return (
        <div className="container">
  <div className="row">
    <div className="col-12">
      <h1 className="section__title section__title--mb">I Dream in Another Language</h1>
    </div>
    <div className="col-12 col-xl-6">
      <div className="card card--details">
        <div className="row">
          <div className="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-5">
            <div className="card__cover">
              <img src="img/covers/cover1.jpg" alt />
              <span className="card__rate card__rate--green">8.4</span>
            </div>
            <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="card__trailer"><i className="icon ion-ios-play-circle" /> Watch trailer</a>
          </div>
          <div className="col-12 col-md-8 col-lg-9 col-xl-7">
            <div className="card__content">
              <ul className="card__meta">
                <li><span>Director:</span> Vince Gilligan</li>
                <li><span>Cast:</span> <a href="#">Brian Cranston</a> <a href="#">Jesse Plemons</a> <a href="#">Matt Jones</a> <a href="#">Jonathan Banks</a> <a href="#">Charles Baker</a> <a href="#">Tess Harper</a></li>
                <li><span>Genre:</span> <a href="#">Action</a>
                  <a href="#">Triler</a></li>
                <li><span>Release year:</span> 2019</li>
                <li><span>Running time:</span> 130 min</li>
                <li><span>Country:</span> <a href="#">USA</a></li>
              </ul>
              <div className="card__description mCustomScrollbar _mCS_2" style={{position: 'relative', overflow: 'visible'}}><div id="mCSB_2" className="mCustomScrollBox mCS-custom-bar3 mCSB_vertical mCSB_outside" tabIndex={0} style={{maxHeight: 'none'}}><div id="mCSB_2_container" className="mCSB_container" style={{position: 'relative', top: 0, left: 0}} dir="ltr">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  </div></div><div id="mCSB_2_scrollbar_vertical" className="mCSB_scrollTools mCSB_2_scrollbar mCS-custom-bar3 mCSB_scrollTools_vertical" style={{display: 'block'}}><div className="mCSB_draggerContainer"><div id="mCSB_2_dragger_vertical" className="mCSB_dragger" style={{position: 'absolute', minHeight: 30, display: 'block', height: 74, maxHeight: 170, top: 0}}><div className="mCSB_dragger_bar" style={{lineHeight: 30}} /><div className="mCSB_draggerRail" /></div></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/*     <div className="col-12 col-xl-6">
      <div tabIndex={0} className="plyr plyr--full-ui plyr--video plyr--html5 plyr--pip-supported plyr--is-touch plyr--fullscreen-enabled plyr--captions-enabled plyr__poster-enabled plyr__tab-focus plyr--paused"><div className="plyr__controls"><button className="plyr__controls__item plyr__control" type="button" data-plyr="play" aria-label="Play"><svg className="icon--pressed" role="presentation" focusable="false"><use xlinkHref="#plyr-pause" /></svg><svg className="icon--not-pressed" role="presentation" focusable="false"><use xlinkHref="#plyr-play" /></svg><span className="label--pressed plyr__sr-only">Pause</span><span className="label--not-pressed plyr__sr-only">Play</span></button><div className="plyr__controls__item plyr__progress__container"><div className="plyr__progress"><input data-plyr="seek" type="range" min={0} max={100} step="0.01" defaultValue={0} autoComplete="off" role="slider" aria-label="Seek" aria-valuemin={0} aria-valuemax="183.126" aria-valuenow="30.983105" id="plyr-seek-1696" aria-valuetext="00:30 of 03:03" style={{-value: '16.92%', userSelect: 'none', touchAction: 'manipulation'}} className seek-value="96.9519629358693" /><progress className="plyr__progress__buffer" min={0} max={100} value="18.846040431178533" role="progressbar" aria-hidden="true">% buffered</progress><span className="plyr__tooltip">00:00</span></div></div><div className="plyr__controls__item plyr__time--current plyr__time" aria-label="Current time">-02:32</div><div className="plyr__controls__item plyr__volume"><button type="button" className="plyr__control" data-plyr="mute"><svg className="icon--pressed" role="presentation" focusable="false"><use xlinkHref="#plyr-muted" /></svg><svg className="icon--not-pressed" role="presentation" focusable="false"><use xlinkHref="#plyr-volume" /></svg><span className="label--pressed plyr__sr-only">Unmute</span><span className="label--not-pressed plyr__sr-only">Mute</span></button><input data-plyr="volume" type="range" min={0} max={1} step="0.05" defaultValue={1} autoComplete="off" role="slider" aria-label="Volume" aria-valuemin={0} aria-valuemax={100} aria-valuenow={100} id="plyr-volume-1696" aria-valuetext="100.0%" style={{-value: '100%', userSelect: 'none', touchAction: 'manipulation'}} /></div><button className="plyr__controls__item plyr__control" type="button" data-plyr="captions"><svg className="icon--pressed" role="presentation" focusable="false"><use xlinkHref="#plyr-captions-on" /></svg><svg className="icon--not-pressed" role="presentation" focusable="false"><use xlinkHref="#plyr-captions-off" /></svg><span className="label--pressed plyr__sr-only">Disable captions</span><span className="label--not-pressed plyr__sr-only">Enable captions</span></button><div className="plyr__controls__item plyr__menu"><button aria-haspopup="true" aria-controls="plyr-settings-1696" aria-expanded="false" type="button" className="plyr__control" data-plyr="settings"><svg role="presentation" focusable="false"><use xlinkHref="#plyr-settings" /></svg><span className="plyr__sr-only">Settings</span></button><div className="plyr__menu__container" id="plyr-settings-1696" hidden><div><div id="plyr-settings-1696-home"><div role="menu"><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true"><span>Captions<span className="plyr__menu__value">Disabled</span></span></button><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true"><span>Quality<span className="plyr__menu__value">576p</span></span></button><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true"><span>Speed<span className="plyr__menu__value">Normal</span></span></button></div></div><div id="plyr-settings-1696-captions" hidden><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Captions</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu"><button data-plyr="language" type="button" role="menuitemradio" className="plyr__control" aria-checked="true" value={-1}><span>Disabled</span></button><button data-plyr="language" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value={0}><span>English<span className="plyr__menu__value"><span className="plyr__badge">EN</span></span></span></button><button data-plyr="language" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value={1}><span>Français<span className="plyr__menu__value"><span className="plyr__badge">FR</span></span></span></button></div></div><div id="plyr-settings-1696-quality" hidden><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Quality</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu"><button data-plyr="quality" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value={1080}><span>1080p<span className="plyr__menu__value"><span className="plyr__badge">HD</span></span></span></button><button data-plyr="quality" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value={720}><span>720p<span className="plyr__menu__value"><span className="plyr__badge">HD</span></span></span></button><button data-plyr="quality" type="button" role="menuitemradio" className="plyr__control" aria-checked="true" value={576}><span>576p<span className="plyr__menu__value"><span className="plyr__badge">SD</span></span></span></button></div></div><div id="plyr-settings-1696-speed" hidden><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Speed</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu"><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="0.5"><span>0.5×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="0.75"><span>0.75×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="true" value={1}><span>Normal</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.25"><span>1.25×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.5"><span>1.5×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.75"><span>1.75×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value={2}><span>2×</span></button></div></div></div></div></div><button className="plyr__controls__item plyr__control" type="button" data-plyr="pip"><svg role="presentation" focusable="false"><use xlinkHref="#plyr-pip" /></svg><span className="plyr__sr-only">PIP</span></button><button className="plyr__controls__item plyr__control" type="button" data-plyr="fullscreen"><svg className="icon--pressed" role="presentation" focusable="false"><use xlinkHref="#plyr-exit-fullscreen" /></svg><svg className="icon--not-pressed" role="presentation" focusable="false"><use xlinkHref="#plyr-enter-fullscreen" /></svg><span className="label--pressed plyr__sr-only">Exit fullscreen</span><span className="label--not-pressed plyr__sr-only">Enter fullscreen</span></button></div><div className="plyr__video-wrapper"><video crossOrigin playsInline poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" id="player" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4">
            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" size={576} />
            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" size={720} />
            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4" size={1080} />
            <track kind="captions" label="English" srcLang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" default />
            <track kind="captions" label="Français" srcLang="fr" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt" />
            <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" download>Download</a>
          </video><div className="plyr__poster" style={{backgroundImage: 'url("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg")'}} /></div><div className="plyr__captions" /><button type="button" className="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play"><svg role="presentation" focusable="false"><use xlinkHref="#plyr-play" /></svg><span className="plyr__sr-only">Play</span></button></div>
    </div>  */}
  </div>
</div>

    );
};

export default Index;