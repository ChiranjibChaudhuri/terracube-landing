# TerraCube — Potential Services on Google Earth Engine

> Research document: What services can be built on top of EE and its 1,000+ datasets
> Date: 2026-04-06

---

## EE Data Catalog at a Glance
- **90+ petabytes** of satellite imagery and geospatial datasets
- **1,000+ curated datasets**, 50+ years of historical data
- Resolutions from 1m to global scale, updated daily
- Sentinel-1/2/3/5, Landsat 5-9, MODIS, ERA5, DEMs, and much more

---

## Current TerraCube Services (Built)

| Service | EE Datasets Used | Status |
|---------|-----------------|--------|
| Risk Monitoring (flood, wind, freeze-thaw, heat) | GFS, Sentinel-1 SAR, Sentinel-2 | ✅ Vault Neo |
| Energy Estimation (heating/cooling) | ERA5 degree-day model | ✅ Vault Neo |
| AI Agent (portfolio analysis) | — (orchestrates above services) | ✅ Vault Neo |
| Workflow Automation | — (scheduler for reports/alerts) | ✅ Vault Neo |

---

## Expansion Opportunities

### 🏠 Real Estate & Property (Adjacent to Current)

#### 1. **Property Valuation Index**
- **Datasets:** Dynamic World (10m land use), Sentinel-2 NDVI, nighttime lights (VIIRS), population density (WorldPop)
- **What:** Track changes around a property — new construction, green space loss/gain, infrastructure development, population growth
- **Value:** Better property valuation, identify up-and-coming neighborhoods, detect gentrification patterns
- **Customers:** REITs, property investors, real estate agents

#### 2. **Environmental Compliance & ESG Scoring**
- **Datasets:** MODIS fire data, Sentinel-2 NDVI, forest change (Hansen), air quality (Sentinel-5P NO2/SO2)
- **What:** Score properties/portfolios on environmental criteria — proximity to pollution, green space ratio, deforestation risk
- **Value:** ESG reporting for institutional investors, mortgage lenders, insurance companies
- **Customers:** ESG funds, banks, mortgage underwriters

#### 3. **Construction Site Monitoring**
- **Datasets:** Sentinel-1 SAR (change detection), Sentinel-2 (high-res optical), PlanetScope (daily if licensed)
- **What:** Track construction progress remotely — site clearing, foundation, framing, completion stages
- **Value:** Remote progress verification for lenders and developers
- **Customers:** Construction lenders, developers, project managers

#### 4. **Coastal & Sea-Level Risk Analytics**
- **Datasets:** JRC Global Surface Water, Copernicus DEM (coastal), SRTM, ERA5 sea-level pressure, satellite altimetry
- **What:** Coastal erosion tracking, sea-level rise exposure, storm surge modeling
- **Value:** Coastal property risk pricing, long-term asset depreciation
- **Customers:** Coastal property owners, insurers, municipal planners

---

### 🌾 Agriculture & Food

#### 5. **Crop Health & Yield Prediction**
- **Datasets:** Sentinel-2 NDVI/EVI, MODIS vegetation indices, ERA5 precipitation/temp, USDA NASS Cropland Data
- **What:** Monitor crop health, predict yields, detect pest/disease stress
- **Value:** Crop insurance pricing, commodity trading signals, farm management
- **Customers:** Agricultural insurers, commodity traders, large farms

#### 6. **Precision Agriculture Advisory**
- **Datasets:** Sentinel-2 multispectral, soil moisture (GLDAS), GRIDMET weather
- **What:** Variable-rate irrigation recommendations, fertilizer timing, planting windows
- **Value:** Input cost reduction, yield optimization
- **Customers:** Farm management platforms, ag-tech companies

#### 7. **Supply Chain Transparency & Deforestation Monitoring**
- **Datasets:** Hansen Global Forest Change, Sentinel-1 SAR, Dynamic World, ESA WorldCover
- **What:** Monitor commodity supply chains (palm oil, soy, timber, cattle) for deforestation
- **Value:** ESG compliance, regulatory risk (EU Deforestation Regulation), brand protection
- **Customers:** Consumer goods companies, commodity traders, regulators

---

### 🌍 Climate & Carbon

#### 8. **Carbon Credit Verification**
- **Datasets:** Forest change (Hansen/GEDI), biomass maps, Sentinel-1/2 (above-ground carbon), MODIS NPP
- **What:** Verify carbon offset projects — confirm reforestation, detect reversal/cheating
- **Value:** Trust in voluntary carbon markets ($2B+ market)
- **Customers:** Carbon offset registries, ESG auditors, carbon credit buyers

#### 9. **Scope 3 Emissions Estimation**
- **Datasets:** Nighttime lights (VIIRS), Sentinel-5P (NO2, CH4, CO), MODIS fire, OCO-2 (CO2)
- **What:** Estimate Scope 3 emissions for supply chains based on satellite-observed activity
- **Value:** Hard-to-measure emissions data for corporate reporting
- **Customers:** Corporations, ESG consultants, regulators

#### 10. **Urban Heat Island Mapping**
- **Datasets:** Landsat thermal, MODIS LST, ERA5, Sentinel-2 (albedo/vegetation)
- **What:** Map urban heat islands, track cooling/greening interventions, predict heat-related health risks
- **Value:** Public health planning, green infrastructure ROI, property cooling costs
- **Customers:** City planners, public health departments, utilities

---

### 🏭 Infrastructure & Utilities

#### 11. **Solar PV Potential Assessment**
- **Datasets:** Global Solar Atlas (GHI/DNI), Sentinel-2 (shading from trees/buildings), Copernicus DEM, ERA5 cloud cover
- **What:** Assess rooftop and ground-mount solar potential at property level
- **Value:** Pre-screen sites, estimate generation, reduce soft costs
- **Customers:** Solar installers, energy consultants, homeowners

#### 12. **Power Line & Infrastructure Corridor Monitoring**
- **Datasets:** Sentinel-1 SAR (vegetation growth near lines), Sentinel-2, MODIS fire
- **What:** Detect vegetation encroachment on power corridors, wildfire risk near infrastructure
- **Value:** Preventive maintenance, wildfire risk reduction
- **Customers:** Utilities, pipeline operators, rail companies

#### 13. **Water Quality & Watershed Health**
- **Datasets:** Sentinel-2 (chlorophyll, turbidity, CDOM), Sentinel-3 OLCI, Landsat (historical)
- **What:** Monitor lakes, rivers, reservoirs for algae blooms, sediment, pollution
- **Value:** Early warning for water treatment, regulatory compliance
- **Customers:** Water utilities, environmental agencies, mining companies

---

### 🏦 Insurance & Finance

#### 14. **Parametric Insurance Triggers**
- **Datasets:** GFS/ERA5 (wind speed, rainfall, temperature), Sentinel-1 (flood extent), MODIS fire
- **What:** Objective, satellite-based triggers for insurance payouts (no claims adjuster needed)
- **Value:** Faster payouts, lower admin costs, new markets (uninsured smallholders)
- **Customers:** Insurers, MGA platforms, microinsurance providers

#### 15. **Wildfire Risk Scoring**
- **Datasets:** MODIS/VIIRS fire history, Sentinel-2 NDVI (fuel moisture), ERA5 (drought index), DEM (slope)
- **What:** Real-time wildfire risk scores updated with current conditions
- **Value:** Dynamic pricing, underwriting accuracy, early warning
- **Customers:** Property insurers, mortgage lenders, fire departments

#### 16. **Post-Disaster Damage Assessment**
- **Datasets:** Sentinel-1 SAR (before/after), Sentinel-2 (before/after), Planet (if available)
- **What:** Rapid damage assessment after floods, hurricanes, earthquakes, wildfires
- **Value:** Faster claims processing, resource allocation, government response
- **Customers:** Insurers, emergency management agencies, FEMA/NGOs

---

### 🏙️ Urban Planning & Smart Cities

#### 17. **Urban Expansion & Sprawl Tracking**
- **Datasets:** Dynamic World, ESA WorldCover, nighttime lights (VIIRS), WorldPop
- **What:** Track urban growth patterns, informal settlement expansion, green space loss
- **Value:** Infrastructure planning, zoning enforcement, sustainable development
- **Customers:** Municipal governments, urban planners, development banks

#### 18. **Traffic & Economic Activity Estimation**
- **Datasets:** Nighttime lights (VIIRS), Sentinel-1 (vehicle detection on roads), parking lot monitoring
- **What:** Estimate economic activity from space — retail foot traffic, industrial output, port activity
- **Value:** Economic indicators, site selection, investment research
- **Customers:** Hedge funds, economic researchers, retail chains

---

### 🏖️ Tourism & Recreation

#### 19. **Beach & Coastal Monitoring**
- **Datasets:** Sentinel-2 (shoreline change), JRC water extent, ERA5 (wave height, storm surge)
- **What:** Monitor beach erosion, water quality, algae blooms at tourism destinations
- **Value:** Tourism operators, coastal property managers, environmental agencies

#### 20. **Snow Cover & Ski Resort Monitoring**
- **Datasets:** MODIS snow cover, Sentinel-2 snow extent, ERA5 temperature
- **What:** Real-time snow cover mapping for ski resorts, predict melt dates
- **Value:** Operations planning, tourism marketing, water resource management

---

## Competitive Landscape

| Company | Focus | Notable |
|---------|-------|---------|
| **Jupiter Intelligence** | Climate risk scoring for property/insurance | $50M+ raised, physical climate risk models |
| **Kairos** | Climate risk analytics for real estate | Property-level scoring |
| **One Concern** | Disaster risk AI | Flood, earthquake, wildfire |
| **Descartes Labs** | Geospatial analytics platform | Broad EE competitor, commercial |
| **Planet** | Daily satellite imagery | Owns satellites, high-res daily data |
| **Orbital Insight** | Geospatial AI analytics | Economic activity monitoring |
| **ClimateCheck** | Property climate risk scores | Consumer-facing real estate |
| **Four Twenty Seven** (Accenture) | Climate risk for infrastructure | Acquired by Accenture |
| **Deloitte GeoAI Platform** | Scenario planning | Built on GEE + Vertex AI |

---

## Recommended TerraCube Expansion Roadmap

### Phase 5 — Insurance & Parametric (Next)
1. Parametric insurance trigger service (wind, flood, fire)
2. Wildfire risk scoring (dynamic, condition-based)
3. Post-disaster damage assessment API

### Phase 6 — ESG & Carbon
4. Property ESG scoring
5. Carbon credit verification
6. Scope 3 emissions estimation

### Phase 7 — Agriculture
7. Crop health monitoring
8. Supply chain deforestation monitoring

### Phase 8 — Urban & Infrastructure
9. Urban heat island mapping
10. Construction site monitoring
11. Solar PV potential assessment

### Phase 9 — Broader Market
12. Coastal risk analytics
13. Water quality monitoring
14. Nighttime economic activity indices

---

## Key EE Datasets Reference

| Dataset | Resolution | Frequency | Best For |
|---------|-----------|-----------|----------|
| Sentinel-1 SAR | 10m | 6-day | Flood mapping, change detection, construction |
| Sentinel-2 MSI | 10-20m | 5-day | Land cover, NDVI, water quality |
| Sentinel-5P TROPOMI | 3.5km | Daily | Air quality, NO2, CH4 emissions |
| Landsat 8/9 | 30m | 16-day | Thermal, long-term change, urban |
| MODIS | 250m-1km | Daily | Fire, temperature, vegetation |
| ERA5 | ~31km | Hourly | Weather, climate, energy modeling |
| GFS | ~25km | 6-hourly | Near-term weather forecasting |
| Dynamic World | 10m | Near-realtime | Land use classification |
| Hansen Forest Change | 30m | Annual | Deforestation, forest loss/gain |
| VIIRS Night Lights | 500m | Daily | Economic activity, urbanization |
| JRC Surface Water | 30m | Monthly | Water bodies, flooding history |
| Copernicus DEM | 10-30m | Static | Elevation, slope, aspect |
| WorldPop | 100m | Annual | Population density |
| GEDI | 25m | Sparse | Forest biomass, canopy height |
