import { Helmet } from 'react-helmet-async';

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - ApplyNora</title>
        <meta name="description" content="About ApplyNora" />
      </Helmet>
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden bg-surface-ground min-h-[60vh]">
          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop pt-space-xl pb-space-lg text-center">
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mb-space-md">
              Elevating the executive job search.
            </h1>
            <p className="font-body-lg text-body-lg text-slate-muted max-w-3xl mx-auto">
              ApplyNora was built to solve the fundamental inefficiency of the
              modern career transition: highly qualified leaders spending
              hundreds of hours manually tailoring documents and tracking
              applications, instead of preparing for critical interviews.
            </p>
          </section>

          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-lg">
            <div className="max-w-4xl mx-auto space-y-space-xl text-left">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
                  Our Approach to AI
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We believe AI should augment human capability, not replace
                  human judgment. ApplyNora utilizes advanced language models to
                  synthesize your career history against market demands, but we
                  strictly enforce a Human-in-the-Loop architecture. No
                  application is ever submitted blindly on your behalf.
                </p>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
                  Privacy &amp; Control
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Your career data is sensitive. We operate with strict data
                  minimization principles. We do not sell candidate data, and
                  our models do not use your private CVs for cross-tenant
                  training.
                </p>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
                  The Vision
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  To create a frictionless, intelligent conduit between
                  exceptional talent and the organizations that require their
                  leadership, removing the noise from the recruitment process.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
