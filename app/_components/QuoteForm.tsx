"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * The quote form. Previously this was decorative markup: no <form>, no name
 * attributes, no labels, and a "Submit Request" <a href="/contact"> — so anyone
 * who filled it in lost everything they typed the moment they clicked.
 *
 * There is no backend on this build, so submission composes a mailto to the
 * sales inbox with the fields filled in. That is a real send rather than a
 * pretend one, and it matches the architecture's "both channels feed the same
 * sales inbox". Swap the handler for a POST when an endpoint exists.
 */
export default function QuoteForm({
  formTitle,
  formDesc,
  productOptions,
}: {
  formTitle: string;
  formDesc: string;
  productOptions: string[];
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Country: ${get("country")}`,
      `Product of interest: ${get("product")}`,
      "",
      "Requirement:",
      get("details"),
    ].join("\n");
    const subject = `Quote request${get("product") ? ` — ${get("product")}` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="request__form-body" onSubmit={handleSubmit} noValidate={false}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <h4 className="request__form-title">{formTitle}</h4>
          <p className="request__form-desc">{formDesc}</p>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="form-group">
            <label className="sr-only" htmlFor="qf-name">
              Your name
            </label>
            <input
              id="qf-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="form-control"
              placeholder="Name"
            />
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="form-group">
            <label className="sr-only" htmlFor="qf-email">
              Your email address
            </label>
            <input
              id="qf-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="form-group">
            <label className="sr-only" htmlFor="qf-country">
              Country
            </label>
            <input
              id="qf-country"
              name="country"
              type="text"
              autoComplete="country-name"
              className="form-control"
              placeholder="Country"
            />
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="form-group form-group-select">
            <label className="sr-only" htmlFor="qf-product">
              Product of interest
            </label>
            <select id="qf-product" name="product" className="form-control" defaultValue="">
              <option value="" disabled>
                Product of interest
              </option>
              {productOptions.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="form-group">
            <label className="sr-only" htmlFor="qf-details">
              Grade, size, quantity, and application
            </label>
            <textarea
              id="qf-details"
              name="details"
              required
              className="form-control"
              placeholder="Grade, size, quantity, application…"
            />
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12">
          <button type="submit" className="btn btn__primary">
            Submit Request <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </button>
          <p className="form-note" role="status">
            {sent
              ? "Your email client should have opened with the details filled in. If it did not, email us directly."
              : "Opens your email client with the details filled in, addressed to our sales inbox."}
          </p>
        </div>
      </div>
    </form>
  );
}
