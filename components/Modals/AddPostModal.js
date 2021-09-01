import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Modal } from "react-responsive-modal";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Formik, Field, Form } from "formik";

export default  withPageAuthRequired( function AddPost({ open, onCloseModal, author, submitPost }) {

    const router = useRouter()
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      classNames={{
        modal: "custom-modal",

      }}
    >
      <div className="flex items-center w-full  bg-gray-5">
        <div className=" my-10 mx-auto rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              <h2>Post An Idea</h2>
            </h1>
          </div>
          <div>
            <Formik
              initialValues={{
                title: "",
                body: "",
                tag: "",
                links: "",
                authorId: author[0].id,
              }}
              onSubmit={async (values) => {
                submitPost(values);
                router.push('/dashboard');
              }}
            >
              <Form className="px-5">
                <div className="mb-6">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm text-gray-600 text-lg font-medium dark:text-gray-400"
                  >
                    Title
                  </label>
                  <Field
                    id="title"
                    name="title"
                    placeholder="Supabase Tutorial"
                    className="w-full px-3 py-4 placeholder-gray-300 border text-lg font-medium border-gray-800 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 bg-transparent dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="body"
                    className="block mb-2 text-sm text-gray-600 text-lg font-medium dark:text-gray-400"
                  >
                    Description
                  </label>

                  <Field
                    as="textarea"
                    id="body"
                    name="body"
                    placeholder="A post that tell if if a ball is red or yellow"
                    className="w-full px-3 py-4 h-48 bg-transparent placeholder-gray-300 border border-gray-800 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="tag"
                    className="block mb-2  text-sm text-gray-600 text-lg font-medium dark:text-gray-400"
                  >
                    Tag
                  </label>

                  <Field
                    id="tag"
                    name="tag"
                    as="select"
                    className="py-4 px-2 bg-transparent border border-gray-800 w-full max-w-xs rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  >
                    <option>
                      Choose article tag
                    </option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="serverless">Serverless</option>
                    <option value="other">Other</option>
                  </Field>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="links"
                    className="block mb-2 text-sm text-gray-600 text-lg font-medium dark:text-gray-400"
                  >
                    Links (optional)
                  </label>
                  <Field
                    id="links"
                    name="links"
                    placeholder="https://dribbble.com"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-800 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 bg-transparent dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <Field type="hidden" id="authorId" name="authorId" />
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-green-transparent rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Submit Post
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </Modal>
  );
})
