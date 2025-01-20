'use client';
import Footer from '@/components/main/Footer';
import NavBar from '@/components/main/NavBar';
import { useState } from 'react';

export default function GrievanceForm() {
    const [activeTab, setActiveTab] = useState('student');

    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />
            <div className='w-full p-4'>
                <h1 className="text-3xl font-bold text-center text-blue-600">Grievance and Feedback Form</h1>

                <div className="flex justify-center mt-6">
                <div className="flex bg-white shadow-md rounded-md">
                    <TabButton tab="student" activeTab={activeTab} setActiveTab={setActiveTab}>
                        Student
                    </TabButton>
                    <TabButton tab="parent" activeTab={activeTab} setActiveTab={setActiveTab}>
                        Parent
                    </TabButton>
                    <TabButton tab="alumni" activeTab={activeTab} setActiveTab={setActiveTab}>
                        Alumni
                    </TabButton>
                </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                {activeTab === 'student' && <StudentForm />}
                {activeTab === 'parent' && <ParentForm />}
                {activeTab === 'alumni' && <AlumniForm />}
            </div>
            </div>
            <Footer />
        </div>
    );
}
function TabButton({ tab, activeTab, setActiveTab, children }) {
    return (
        <button
            className={`px-6 py-3 border-b-4 text-lg font-semibold transition-all ${
                activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab(tab)}
        >
            {children}
        </button>
    );
}

function StudentForm() {
    return (
        <form className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Student Personal Details</h2>

            <input type="text" placeholder="Name of the Student" className="input-field" />
            <input type="text" placeholder="Registration No." className="input-field" />
            <input type="email" placeholder="Email address" className="input-field" />
            <input type="tel" placeholder="Mobile No." className="input-field" />

            <div className="flex gap-4">
                <label><input type="radio" name="gender" value="Male" /> Male</label>
                <label><input type="radio" name="gender" value="Female" /> Female</label>
                <label><input type="radio" name="gender" value="Transgender" /> Transgender</label>
            </div>

            <select className="input-field">
                <option>Department</option>
                <option>CME</option>
                <option>ECE</option>
                <option>EEE</option>
            </select>

            <select className="input-field">
                <option>Year</option>
                <option>First Year</option>
                <option>Second Year</option>
                <option>Final Year</option>
            </select>

            <textarea placeholder="State your grievance" className="input-field"></textarea>

            <input type="submit" value="Submit" className="btn-submit" />
        </form>
    );
}

function ParentForm() {
    return (
        <form className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Parent Information</h2>

            <input type="text" placeholder="Name of the Parent" className="input-field" />
            <input type="tel" placeholder="Mobile No." className="input-field" />
            <input type="email" placeholder="Email address" className="input-field" />

            <textarea placeholder="Grievance about your child/staff/department/college" className="input-field"></textarea>
            <textarea placeholder="Any positive point about the college" className="input-field"></textarea>

            <input type="submit" value="Submit" className="btn-submit" />
        </form>
    );
}

function AlumniForm() {
    return (
        <form className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Alumni Personal Information</h2>

            <input type="text" placeholder="Name of the Alumni" className="input-field" />
            <input type="tel" placeholder="Mobile No" className="input-field" />
            <input type="email" placeholder="Email address" className="input-field" />
            <input type="text" placeholder="Address for Communication" className="input-field" />
            <input type="text" placeholder="Register No" className="input-field" />

            <select className="input-field">
                <option>Department</option>
                <option>CME</option>
                <option>ECE</option>
                <option>EEE</option>
            </select>

            <input type="text" placeholder="Year of Passing" className="input-field" />
            <textarea placeholder="Your Feedback or suggestion" className="input-field"></textarea>

            <input type="submit" value="Submit" className="btn-submit" />
        </form>
    );
}