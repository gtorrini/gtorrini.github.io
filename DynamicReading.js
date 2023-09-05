// Find research HTML elements
const cosmos = document.getElementById("cosmos-blurb");
const offset = document.getElementById("offset-blurb");
const veritas = document.getElementById("veritas-blurb");


// Inner HTML for ELI5 style
const cosmosEli5 = `
<p class="blurb">
<b>What are intermediate-mass black holes?</b> Supermassive black holes (≥ 1 million × the
mass of the Sun) are commonly found at the centers of large galaxies, including our own Milky Way.
The gravitational pull of these dense objects is so strong that not even light can escape them!
Astronomers have observed supermassive black holes in the early universe a mere 600 million years
after the Big Bang. However, they aren't sure how these black holes grew so rapidly. One potential
"seed" of these giants is intermediate-mass black holes (100-100,000 × the mass of the Sun).
</p>

<figure>
    <img class="fig-img" src="images/agn-anatomy.jpg">
    <figcaption>
        Anatomy of an active galactic nucleus, or AGN. </br>
        <i>Credit:</i> Sophia Dagnello, NRAO/AUI/NSF
    </figcaption>
</figure>

<p class="blurb">
<b>What are dwarf AGNs?</b> In some galaxies, the central compact region is extremely luminous 
compared to the starlight from the rest of the galaxy. These bright central regions are called 
active galactic nuclei, or AGN. The black holes in AGNs are surrounded by a disk of swirling gas.
When this gas is accreted, or pulled in by the black hole, it heats up and releases energy in the
form of visible light. If there's an intermediate-mass black hole in the AGN, we call it a dwarf AGN.
</p>

<p class="blurb">
<b>What is COSMOS?</b> A variable visible light signal is one of several AGN signatures. Other 
identification methods are biased against low-luminosity dwarf AGNs. The wide-area <a href="https://cosmos.astro.caltech.edu/">
Cosmic Evolution Survey</a> (COSMOS) field has a large set of data from deep, multi-wavelength
observations. Deep fields are regions of the sky that have been observed for long periods of time, 
so COSMOS is a great search area for dim dwarf AGNs. Multi-wavelength data allows us to
compare and contrast our visible variability selection technique with methods less sensitive to dwarf
AGNs.
</p>

<figure>
    <img class="fig-img" src="images/cosmos-hst.jpg">
    <figcaption>
        A comparison of the wide-area COSMOS field to the full moon and other Hubble Space Telescope survey fields.</br>
        <i>Credit:</i> Cosmic Evolutions Survey
    </figcaption>
</figure>

<p class="blurb">
<b>What did you find?</b> We observed 31,196 total sources in the COSMOS field with the <a href="https://www.darkenergysurvey.org/">
Dark Energy Survey</a> (DES) Camera. After filtering out stars and analyzing how the visible light signal
changed over time, we identified galaxies with statistically significant variability. Using data from
the COSMOS2020 catalog, we further identified variable galaxies with low mass estimates (<10 9.5 × 
the mass of the Sun) to select our dwarf AGN candidates. From our parent sample, we identified 226 
galaxies by the variability of their visible light. Of the 202 variable galaxies with mass estimates in COSMOS2020,
we identified 51 dwarf AGN candidates. Over 100 of the variability-identified candidates could be matched
to sources in several COSMOS AGN catalogs. This overlap suggests that our technique could be an effective
shortcut for comfirming dwarf AGN candidates with other methods.
</p>
`;

const offsetEli5 = `
<p class="blurb">
<b>What are intermediate-mass black holes?</b> Supermassive black holes (≥ 1 million × the
mass of the Sun) are commonly found at the centers of large galaxies, including our own Milky Way.
The gravitational pull of these dense objects is so strong that not even light can escape them!
Astronomers have observed supermassive black holes in the early universe a mere 600 million years
after the Big Bang. However, they aren't sure how these black holes grew so rapidly. One potential
"seed" of these giants is intermediate-mass black holes (100-100,000 × the mass of the Sun).
</p>

<p class="blurb">
<b>What are dwarf AGNs?</b> In some galaxies, the central compact region 
is extremely luminous compared to the starlight from the rest of the galaxy. These bright central 
regions are called active galactic nuclei, or AGN. The black holes in AGNs are surrounded by a disk
of swirling gas. When this gas is accreted, or pulled in by the black hole, it heats up and releases
energy in the form of visible light. If there's an intermediate-mass black hole in the AGN, we call 
it a dwarf AGN.
</p>

<p class="blurb">
<b>What are 'wandering' black holes?</b> One model of galaxy evolution predicts that large galaxies
formed through successive mergers between smaller dwarf galaxies. Since dwarf galaxies have a lower
central mass, and they gravitationally interact during mergers, they could have a higher fraction of
“wandering” black holes that are off-center. My goal was to test this hypothesis by searching for
dwarf AGNs and measuring their distance from the center of the dwarf galaxy.
</p>

<figure>
    <img class="fig-img" src="images/tremmel-wandering.jpg">
    <figcaption>
        Supermassive black holes (white dots) in three Milky Way-sized galaxies evolved with the Romulus simulation.</br>
        <i>Credits:</i> Tremmel M., Governato F., Volonteri M., Pontzen A., Quinn T. R., 2018, The Astrophysical Journal Letters 2018, 857, L22
    </figcaption>
</figure>

<p class="blurb">
<b>How do you hunt for 'wanderers'?</b> One identification method uses the unique color fingerprint, or spectrum,
of the accreting gas. But traditional spectroscopic instruments are biased against off-center sources
since they only detect a small slice of the sky through a slit. Instead, we used data from the 
<a href="https://www.darkenergysurvey.org/">Dark Energy Survey</a> Camera to identify dwarf AGN 
candidates by their variable visible light signal. This camera has a field of view more than 4 times the apparent
size of the full moon in the night sky-ideal for imaging dwarf AGN hiding away from the center of
their galaxies.

<p class="blurb">
<b>What did you find?</b> We measured the offset distribution of variability-identified dwarf AGNs
in the Dark Energy Survey (DES) Wide-field Survey. First, we modified camera images to remove the
night-to-night, constantly bright background sources. For the remaining sources, we analyzed the 
strength of the visible light signal (and how it changed over time) to identify dwarf AGN candidates.
After measuring the position of these sources in the sky, we calculated their offset from nearby galaxy 
using coordinate data from the NASA-Sloan Atlas. We did not find a statistically significant
fraction of wandering AGN candidates. This study was a proof of concept which could be 
applied to observational data from larger surveys, such as the Vera Rubin Observatory. 
</p>
`;

const veritasEli5 = `
<p class="blurb">
<b>What are gamma-rays?</b> There is a whole spectrum of light beyond what the human eye can see,
including the most energetic form of light: gamma-rays. Although gamma-rays from space cannot 
penetrate the Earth's atmosphere, they do still leave a trace of their existence. When gamma-rays
interact with massive particles at the top of the atmosphere, they impart tremendous momentum and
energy, resulting in an extensive air shower (EAS). An EAS is a cascade of charged high-energy 
particles, such as electrons, positrons, and nuclei.
</p>

<figure>
    <img class="fig-img" src="images/cherenkov-effect.png" alt="IACTs Cherenkov effect">
    <figcaption> Imaging Atmospheric Cherenkov Telescopes capturing Cherenkov radiation from a gamma-ray-induced extensive air shower. </br> <i>Credit:</i> Cherenkov Telescope Array (CTA)</figcaption>
</figure>

<p class="blurb">
<b>How do we detect gamma-rays from space?</b> You've probably heard that "nothing can travel faster
than the speed of light". This is not exactly true, though! What we really mean is that nothing can
travel faster than the speed of light <i>in a vacuum</i>. Although the speed of light is a constant,
that constant value can shift slightly depending on which medium light travels through. In Earth's 
atmosphere, which contains a mixture of molecules, light travels at a factor of 1/1.000293 times its 
speed in a vacuum. When the speed of high-energy particles in the EAS exceeds the speed of the
slowed-down light, a shock wave occurs (similar to a sonic boom). This shock wave triggers blue cone-
like emission called <b>Cherenkov radiation</b>, which is detected by cameras on Imaging Atmospheric
Cherenkov Telescopes (IACTs). 
</p>

<p class="blurb">
<b>What are cosmic rays?</b> Cosmic rays are massive, high-energy particles from space. Many of them
come from the Sun, but some even originate from astronomical sources outside our own galaxy! Like
energetic gamma-rays, cosmic rays can also generate an EAS and Cherenkov radiation. Since cosmic rays
are relatively abundant, this contributes a noisy "background" to the gamma-ray signals we want to 
detect. The cosmic-ray background signal is removed in two standard ways. To estimate the background,
these methods compare the source area to surrounding areas within the telescope's field of view. 
Unfortunately, these methods do not work for spatially extended sources (like a supernova remnant or
nebula), where the source area almost fills up the telescope's field of view.
</p>

<figure>
    <img class="fig-img" src="images/cosmic-ray-subtraction.png">
    <figcaption>
        Traditional cosmic-ray background subtraction methods when applied to small source areas 
        like stars (left) and spatially extended sources (right).</br>
        <i>Credit:</i> Gabriela Torrini
    </figcaption>
</figure>

<p class="blurb">
<b>What did you find?</b> I worked with data from <a href="https://veritas.sao.arizona.edu/">VERITAS
</a> (the Very Energetic Radiation Imaging Telescope Array System) to optimize a different background
removal method. The Matched Run Method (MRM) algorithm compares observations of gamma-ray sources
(ON runs) with observation from a secondary field of view (OFF runs). The secondary field of view has 
little to no trace of gamma-ray emission. The MRM matches ON and OFF runs with similar observing 
parameters and hardware configurations. I analyzed how the air shower shape and observation angle/date
impacted algorithm success, and found that time differences were the most critical factor. If the
cosmic ray background is similar in every direction, then nearby OFF runs should accurately estimate
the background for ON runs. But the more these OFF runs are separated in time, the more the sensitivity 
of the telescope changes. Photomultiplier tubes, which detect the Cherenkov radiation, are expensive-
they cannot be frequently replaced or upgraded. Over time, this causes the sensitivity of the 
telescope to gradually degrade. 
</p>
`;

// Inner HTML for abstract style
const cosmosAbstract = `
<p class="blurb">
Multi-wavelength searches for dwarf active galactic nuclei (AGNs) are fundamentally
limited by their low accretion luminosities. Many methods to identify AGNs in massive galaxies are prone to
confusion with other sources or require costly deep surveys. Optical variability does not suffer from the same
degeneracies and makes efficient use of high-cadence photometry. We used imaging data from the Dark Energy
Survey (DES) to select optically variable sources in the Cosmic Evolutions Survey (COSMOS) field. We searched
for x-ray detections in other COSMOS catalogs, estimated stellar masses with spectral energy distribution (SED)
fitting, and estimated black hole (BH) masses using the characteristic variability timescale from Burke et al.
(2021a). Using optical variability selection alone, we identified 226 AGN candidates at <i>z</i> ≤ 3.75. We
selected 14 dwarf AGN candidates at <i>z</i> ≤ 2.90 based on their optical variability, x-ray detections, and
stellar mass. We found one dwarf AGN candidate with a lower <i>M<sub>BH</sub></i> limit in the intermediate mass
range (∼ 100 − 10<sup>4</sup> M<sub>⊙</sub>), but we required further measurements for better constraints. Overall,
∼ 50% of our variability-selected AGN candidates spatially coincided with sources in several COSMOS AGN catalogs,
suggesting that our method could effectively target sources for x-ray or optical spectroscopic follow-up.
</p>
`;

const offsetAbstract = `
<p class="blurb">
Dwarf galaxies possess more pristine merger and accretion histories than massive ones,
making them ideal search environments for "seed" intermediate mass black holes (IMBH, <i>M<sub>BH</sub></i> ∼ 
100 − 10<sup>4</sup> M<sub>⊙</sub>). Due to tidal stripping or recoil during mergers, a significant fraction of
IMBHs could be off-nuclear "wanderers". However, such objects prove elusive targets in the optical domain,
where emission-line diagnostics from single-fiber spectroscopic surveys are biased against off-nuclear, low-luminosity, 
dust obscured, or star formation-dominated sources. Optical variability searches are not biased against off-nuclear
sources, and have already proven successful with detecting wandering SMBHs (e.g. Ward et al. 2021). We measured
the offset distribution of optical variability-selected dwarf AGNs in the Dark Energy Survey (DES) Wide-field 
Survey. To isolate variable point sources, we search for offset AGN candidates using DES difference images. Our
pipeline was a modified version of the DES pipeline for detecting transients (Burke et al. 2020, Kessler et al.
2015). First, we perform source detection on a template image, selecting for known galaxies in the NASA-Sloan
Atlas (NSA). Using data from a single season, we co-added as many high-fidelity difference images as possible for
the same CCD. Next, we performed source detection on the co-add. Any sources detected within the 90% Petrosian light
radius of an NSA-identified galaxy were selected for photometric analysis. Using a 2.5” radius circle centered on
the source, we perform aperture photometry on each difference image frame of the co-add. In order to confirm AGN-like
variability, we constructed light curves and applied the maximum-likelihood estimator from Shen et al. 2019. We did
not find a statistically significant fraction of spatially offset AGN candidates.
</p>
`;

const veritasAbstract = `
<p class="blurb">
The Very Energetic Radiation Imaging Telescope Array System (VERITAS) observes
astronomical sources emitting γ-rays in the energy range from 85 GeV to 30 TeV. VERITAS
can detect a point-like source with 1% of the Crab Nebula flux in a 25-hour long exposure.
From 2012 to 2019, VERITAS observed the Geminga supernova remnant for 93
hours. Although Geminga has 23% of the Crab Nebula flux, it has not been successfully
imaged yet due to its large spatial extent. Telescopes from the Milagro Experiment have
detected Geminga with an angular diameter of 2.6◦, which occupies over 5 times more space
in the sky than the moon (Abdo et al. 2009). Currently, two standard methods are used
to subtract the cosmic ray background from images of a γ-ray source. To estimate the
background, these methods compare the source to surrounding areas within the telescope’s
field of view (FOV). However, these methods do not work for spatially extended sources like
Geminga, where the region of interest (ROI) is comparable in size to the FOV. The Matched
Run Method (MRM) was developed to allow for comparison between the ROI and other
regions of the sky. The MRM algorithm estimates the background by matching observations
from different sources with similar characteristics. We optimized the algorithm by studying
how parameters such as γ-ray shower shape, elevation, azimuth, and season affected the
success of matches. The improved version of the MRM will enable VERITAS to accurately
image spatially extended sources.
</p>
`;

// Functions to changer inner HTML
function explainLikeFive() {
    cosmos.innerHTML = cosmosEli5;
    offset.innerHTML = offsetEli5;
    veritas.innerHTML = veritasEli5;
};

function scientificAbstract() {
    cosmos.innerHTML = cosmosAbstract;
    offset.innerHTML = offsetAbstract;
    veritas.innerHTML = veritasAbstract;
};

// Add event listeners to the reading option buttons
document.getElementById("eli5").addEventListener("click", explainLikeFive);
document.getElementById("abstract").addEventListener("click", scientificAbstract);