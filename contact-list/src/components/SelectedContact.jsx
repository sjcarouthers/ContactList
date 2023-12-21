import { useState } from "react";
import {useEffect} from 'react';
import ContactRow from "./ContactRow";
import fetchContact from './ContactList'

export default function SelectedContact ({ SelectedContactId, setSelectedContactId })