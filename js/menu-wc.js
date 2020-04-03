'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">weather-station-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WeewxModule.html" data-type="entity-link">WeewxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-WeewxModule-598cbd1da62b8e0c4071a00579b7b3f8"' : 'data-target="#xs-controllers-links-module-WeewxModule-598cbd1da62b8e0c4071a00579b7b3f8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WeewxModule-598cbd1da62b8e0c4071a00579b7b3f8"' :
                                            'id="xs-controllers-links-module-WeewxModule-598cbd1da62b8e0c4071a00579b7b3f8"' }>
                                            <li class="link">
                                                <a href="controllers/AgricultureController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AgricultureController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ArchiveController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArchiveController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/HumidityController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HumidityController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/InsideController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InsideController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PrecipitationController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrecipitationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PressureController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PressureController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SensorController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SensorController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SolarController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SolarController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TemperatureController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemperatureController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/WindController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WindController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WeewxModule-598cbd1da62b8e0c4071a00579b7b3f8"' : 'data-target="#xs-injectables-links-module-WeewxModule-598cbd1da62b8e0c4071a00579b7b3f8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WeewxModule-598cbd1da62b8e0c4071a00579b7b3f8"' :
                                        'id="xs-injectables-links-module-WeewxModule-598cbd1da62b8e0c4071a00579b7b3f8"' }>
                                        <li class="link">
                                            <a href="injectables/AgricultureService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AgricultureService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ArchiveService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ArchiveService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HumidityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HumidityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InsideService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InsideService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrecipitationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PrecipitationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PressureService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PressureService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SensorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SensorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SolarService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SolarService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TemperatureService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TemperatureService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WindService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WindService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AgricultureController.html" data-type="entity-link">AgricultureController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ArchiveController.html" data-type="entity-link">ArchiveController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HumidityController.html" data-type="entity-link">HumidityController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/InsideController.html" data-type="entity-link">InsideController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PrecipitationController.html" data-type="entity-link">PrecipitationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PressureController.html" data-type="entity-link">PressureController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SensorController.html" data-type="entity-link">SensorController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SolarController.html" data-type="entity-link">SolarController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TemperatureController.html" data-type="entity-link">TemperatureController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/WindController.html" data-type="entity-link">WindController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AgricultureEntity.html" data-type="entity-link">AgricultureEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveBaseEntity.html" data-type="entity-link">ArchiveBaseEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayAltimeter.html" data-type="entity-link">ArchiveDayAltimeter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayBarometer.html" data-type="entity-link">ArchiveDayBarometer</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayConsBatteryVoltage.html" data-type="entity-link">ArchiveDayConsBatteryVoltage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayDewpoint.html" data-type="entity-link">ArchiveDayDewpoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayEt.html" data-type="entity-link">ArchiveDayEt</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayExtraHumid1.html" data-type="entity-link">ArchiveDayExtraHumid1</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayExtraHumid2.html" data-type="entity-link">ArchiveDayExtraHumid2</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayExtraTemp1.html" data-type="entity-link">ArchiveDayExtraTemp1</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayExtraTemp2.html" data-type="entity-link">ArchiveDayExtraTemp2</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayExtraTemp3.html" data-type="entity-link">ArchiveDayExtraTemp3</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayHail.html" data-type="entity-link">ArchiveDayHail</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayHailRate.html" data-type="entity-link">ArchiveDayHailRate</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayHeatindex.html" data-type="entity-link">ArchiveDayHeatindex</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayHeatingTemp.html" data-type="entity-link">ArchiveDayHeatingTemp</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayHeatingVoltage.html" data-type="entity-link">ArchiveDayHeatingVoltage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayInHumidity.html" data-type="entity-link">ArchiveDayInHumidity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayInTemp.html" data-type="entity-link">ArchiveDayInTemp</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayInTempBatteryStatus.html" data-type="entity-link">ArchiveDayInTempBatteryStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayLeafTemp1.html" data-type="entity-link">ArchiveDayLeafTemp1</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayLeafTemp2.html" data-type="entity-link">ArchiveDayLeafTemp2</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayLeafWet1.html" data-type="entity-link">ArchiveDayLeafWet1</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayLeafWet2.html" data-type="entity-link">ArchiveDayLeafWet2</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayMetadata.html" data-type="entity-link">ArchiveDayMetadata</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayOutHumidity.html" data-type="entity-link">ArchiveDayOutHumidity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayOutTemp.html" data-type="entity-link">ArchiveDayOutTemp</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayOutTempBatteryStatus.html" data-type="entity-link">ArchiveDayOutTempBatteryStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayPressure.html" data-type="entity-link">ArchiveDayPressure</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayRadiation.html" data-type="entity-link">ArchiveDayRadiation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayRain.html" data-type="entity-link">ArchiveDayRain</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayRainBatteryStatus.html" data-type="entity-link">ArchiveDayRainBatteryStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayRainRate.html" data-type="entity-link">ArchiveDayRainRate</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayReferenceVoltage.html" data-type="entity-link">ArchiveDayReferenceVoltage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayRxCheckPercent.html" data-type="entity-link">ArchiveDayRxCheckPercent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDaySoilMoist1.html" data-type="entity-link">ArchiveDaySoilMoist1</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDaySoilMoist2.html" data-type="entity-link">ArchiveDaySoilMoist2</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDaySoilMoist3.html" data-type="entity-link">ArchiveDaySoilMoist3</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDaySoilMoist4.html" data-type="entity-link">ArchiveDaySoilMoist4</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDaySoilTemp1.html" data-type="entity-link">ArchiveDaySoilTemp1</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDaySoilTemp2.html" data-type="entity-link">ArchiveDaySoilTemp2</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDaySoilTemp3.html" data-type="entity-link">ArchiveDaySoilTemp3</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDaySoilTemp4.html" data-type="entity-link">ArchiveDaySoilTemp4</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDaySupplyVoltage.html" data-type="entity-link">ArchiveDaySupplyVoltage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayTxBatteryStatus.html" data-type="entity-link">ArchiveDayTxBatteryStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayUv.html" data-type="entity-link">ArchiveDayUv</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayWind.html" data-type="entity-link">ArchiveDayWind</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayWindBatteryStatus.html" data-type="entity-link">ArchiveDayWindBatteryStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayWindchill.html" data-type="entity-link">ArchiveDayWindchill</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayWindDir.html" data-type="entity-link">ArchiveDayWindDir</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayWindGust.html" data-type="entity-link">ArchiveDayWindGust</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayWindGustDir.html" data-type="entity-link">ArchiveDayWindGustDir</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveDayWindSpeed.html" data-type="entity-link">ArchiveDayWindSpeed</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveEntity.html" data-type="entity-link">ArchiveEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ControllerBase.html" data-type="entity-link">ControllerBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/HumidityEntity.html" data-type="entity-link">HumidityEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/InsideEntity.html" data-type="entity-link">InsideEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrecipitationEntity.html" data-type="entity-link">PrecipitationEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/PressureEntity.html" data-type="entity-link">PressureEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/SensorEntity.html" data-type="entity-link">SensorEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceBase.html" data-type="entity-link">ServiceBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/SolarEntity.html" data-type="entity-link">SolarEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TemperatureEntity.html" data-type="entity-link">TemperatureEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/WindEntity.html" data-type="entity-link">WindEntity</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AgricultureService.html" data-type="entity-link">AgricultureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArchiveService.html" data-type="entity-link">ArchiveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HumidityService.html" data-type="entity-link">HumidityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InsideService.html" data-type="entity-link">InsideService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrecipitationService.html" data-type="entity-link">PrecipitationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PressureService.html" data-type="entity-link">PressureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SensorService.html" data-type="entity-link">SensorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SolarService.html" data-type="entity-link">SolarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemperatureService.html" data-type="entity-link">TemperatureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WindService.html" data-type="entity-link">WindService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});